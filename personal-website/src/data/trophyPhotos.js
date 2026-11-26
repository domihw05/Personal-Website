import championsLeague from '../assets/interests/trophies/bayern-cutout.png'
import collegeFootballPlayoff from '../assets/interests/trophies/cfp-trophy.png'
import lombardi from '../assets/interests/trophies/super-bowl-cutout.png'
import mlsCup from '../assets/interests/trophies/mls-cup-cutout.png'
import mlsIsBack from '../assets/interests/trophies/mls-is-back-cutout.png'
import nba from '../assets/interests/trophies/nba-cutout.png'
import nwsl from '../assets/interests/trophies/nwsl-cutout.png'
import worldSeries from '../assets/interests/trophies/world-series-cutout.png'

function commons(src, label, file, author, licenseType, version) {
  return {
    src,
    label,
    alt: label,
    author,
    href: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(' ', '_'))}`,
    license: `CC ${licenseType.toUpperCase()} ${version}`,
    licenseUrl: `https://creativecommons.org/licenses/${licenseType}/${version}/`,
  }
}

const bayern = commons(championsLeague, 'Bayern’s 2001 Champions League trophy replica',
  'Réplique trophée de la ligue des champions 2001 remporté par le Bayern Munich.jpg', 'Le roquefort', 'by-sa', '4.0')
const photos = {
  'National Championship': {
    src: collegeFootballPlayoff,
    label: 'College Football Playoff National Championship Trophy',
    alt: 'The modern College Football Playoff trophy, shown as a stand-in for the historic award',
    href: 'https://collegefootballplayoff.com/sports/2016/10/19/trophy',
    author: 'College Football Playoff',
    edits: 'resized',
  },
  'Super Bowl XX': {
    src: lombardi,
    label: 'Super Bowl XX trophy at Halas Hall',
    alt: 'The Chicago Bears’ Super Bowl XX trophy',
    href: 'https://www.chicagobears.com/photos/85-bears-memorabilia-16750113',
    author: 'Chicago Bears',
  },
  'MLS Cup': {
    src: mlsCup,
    label: 'Portland’s 2015 MLS Cup on display',
    alt: 'Portland’s 2015 MLS Cup trophy',
    href: 'https://www.timbers.com/news/portland-timbers-2015-mls-cup-display-dec-19-20-oregon-historical-society',
    author: 'Portland Timbers',
  },
  'MLS is Back Tournament': {
    src: mlsIsBack,
    label: 'MLS is Back Tournament trophy',
    alt: 'The silver and gold MLS is Back Tournament trophy',
    href: 'https://www.mlssoccer.com/news/mls-back-tournament-winner-be-awarded-newly-designed-trophy',
    author: 'The Creators Network via MLS',
  },
  'European Cup': bayern,
  'UEFA Champions League': bayern,
  'NBA Championship': {
    src: nba,
    label: 'Portland’s 1977 NBA championship trophy',
    alt: 'The original Portland Trail Blazers NBA championship trophy',
    href: 'https://commons.wikimedia.org/wiki/File:Bill_Walton_and_Jack_Ramsay.jpeg',
    author: 'Sporting News (photographer unknown; U.S. public domain)',
  },
  'NWSL Championship': commons(nwsl, 'Portland Thorns’ 2022 NWSL Championship trophy',
    '2022 NWSL Championship 82 - trophy.jpg', 'Legoktm', 'by-sa', '4.0'),
  'World Series': commons(worldSeries, 'World Series Commissioner’s Trophy',
    "Major League Baseball World Series Commissioner's Trophy.jpg", 'Oleg Yunakov', 'by-sa', '4.0'),
}

export function getTrophyPhoto(title) {
  return photos[title]
}

export const trophyPhotoCredits = [...new Set(Object.values(photos))]
