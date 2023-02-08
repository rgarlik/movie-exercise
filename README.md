# Movie Exercise
Created by Richard Garlik
Check out the live version [here](https://movie-exercise-i1ilwj44i-rgarlik.vercel.app/)

A [React](https://reactjs.org/) application built with [Vite](https://vitejs.dev/) and
using the [MUI](https://mui.com/) component library. It provides a search interface
for movies from the [OMDb API](https://www.omdbapi.com/). It also uses [React Query](https://react-query-v3.tanstack.com/) for side effects and data fetching,
[Emotion](https://emotion.sh/) for styling.

Movies can be searched by name, featuring an infinite scroll and clicked on to get detailed info about them.
There's also a favorites list that keeps favorite movies in `localStorage`.

History and scroll position on the movie search page is kept when the user goes "back" to it from a different page.
*( Update: the scrolling randomly stopped working properly :( )*
## Development
Install the required dependencies using `npm install` and then run the following script to
start a local dev server:

```shell
npm run start
```

## Building for production
Use the following command to build a release bundle of the webapp into the `./dist` folder:

```shell
npm run build
```

If you want to serve the `./dist` folder's contents on a local web server, use:

```shell
npm run preview
```

## Linters
`npm run lint` runs the code through eslint and `npm run format` runs the code through prettier.
