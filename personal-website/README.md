# React + Vite

## Interests page artwork

The Top picks shelf highlights curated titles from the imported library and displays their logged ratings. To change the picks, update `src/components/InterestHighlights.jsx` and add the corresponding artwork in `src/assets/interests/`.

- Posters: [The Odyssey — Universal Pictures](https://www.universalpicturesathome.com/movies/the-odyssey-2026), [Interstellar — Paramount](https://www.paramount.com/movies/interstellar), [The Green Mile — Letterboxd](https://letterboxd.com/film/the-green-mile/).
- Covers: [The Ghostwriter — Sourcebooks via NetGalley](https://www.netgalley.com/catalog/book/495724), [A Flicker in the Dark — Macmillan](https://us.macmillan.com/books/9781250803825/aflickerinthedark/), [The Last Devil to Die — Penguin](https://cdn.penguin.co.uk/dam-assets/books/9780241512449/9780241512449-jacket-large.jpg).

The yearly film ranking keeps small local copies of the initial posters and can use poster URLs from the public Letterboxd feed for newly ranked films.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
