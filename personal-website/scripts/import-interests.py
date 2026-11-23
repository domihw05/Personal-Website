"""Build the Interests page's public snapshot from Letterboxd and StoryGraph exports."""

import argparse
import csv
import io
import json
import unicodedata
from datetime import date
from pathlib import Path
from urllib.parse import urlsplit
from zipfile import ZipFile


def iso_date(value):
    if not value:
        return None
    return date.fromisoformat(value.replace("/", "-")).isoformat()


def rating(value):
    if not value:
        return None
    number = float(value)
    if not 0 < number <= 5:
        raise ValueError(f"Unexpected rating: {value}")
    return number


def film_key(title, year):
    return (unicodedata.normalize("NFKC", title).replace("’", "'").lower(), year)


def film_entry(row):
    url = urlsplit(row["Letterboxd URI"])
    valid_link = url.scheme == "https" and url.netloc in {"boxd.it", "letterboxd.com"}
    year = row["Year"]
    return {
        "title": row["Name"].strip(),
        "year": int(year) if year else None,
        "url": url.geturl() if valid_link else None,
        "rating": rating(row["Rating"]),
        "ratedOn": None,
        "watchedOn": None,
    }


def load_films(path):
    films = {}
    with ZipFile(path) as archive:
        with io.TextIOWrapper(archive.open("ratings.csv"), encoding="utf-8-sig", newline="") as source:
            for row in csv.DictReader(source):
                film = film_entry(row)
                film["ratedOn"] = iso_date(row["Date"])
                films[film_key(film["title"], film["year"])] = film
        with io.TextIOWrapper(archive.open("diary.csv"), encoding="utf-8-sig", newline="") as source:
            for row in csv.DictReader(source):
                film = film_entry(row)
                key = film_key(film["title"], film["year"])
                current = films.setdefault(key, film)
                watched_on = iso_date(row["Watched Date"])
                if watched_on and watched_on >= (current["watchedOn"] or ""):
                    current["watchedOn"] = watched_on
                    if current["ratedOn"] is None:
                        current["rating"] = film["rating"]
    return list(films.values())


def load_books(path):
    with path.open(encoding="utf-8-sig", newline="") as source:
        return [
            {
                "title": row["Title"].strip(),
                "author": row["Authors"].strip(),
                "rating": rating(row["Star Rating"]),
                "finishedOn": iso_date(row["Last Date Read"]),
            }
            for row in csv.DictReader(source)
            if row["Read Status"].strip().lower() == "read"
        ]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--letterboxd", type=Path, metavar="ZIP")
    parser.add_argument("--storygraph", type=Path, metavar="CSV")
    parser.add_argument("--as-of", type=date.fromisoformat, default=date.today())
    args = parser.parse_args()
    destination = Path(__file__).resolve().parents[1] / "src/data/interestLibrary.json"
    if not (args.letterboxd or args.storygraph):
        parser.error("provide at least one source export")
    if args.letterboxd and args.storygraph:
        snapshot = {}
    elif destination.exists():
        snapshot = json.loads(destination.read_text(encoding="utf-8"))
    else:
        parser.error("provide both exports to create the first snapshot")

    if args.letterboxd:
        snapshot["films"] = load_films(args.letterboxd)
    if args.storygraph:
        snapshot["booksImportedOn"] = args.as_of.isoformat()
        snapshot["books"] = load_books(args.storygraph)

    destination.write_text(json.dumps(snapshot, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Imported {len(snapshot['films'])} films and {len(snapshot['books'])} finished books.")


if __name__ == "__main__":
    main()
