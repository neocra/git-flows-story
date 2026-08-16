# Git flows story

Git branching strategies (git flow, GitLab flow, GitHub flow, Microsoft git flow…)
told step by step as a story, rendered with [gitgraph.js](https://github.com/nicoespeon/gitgraph.js)
inside [Storybook](https://storybook.js.org/).

The published site is the Storybook build: https://neocra.github.io/git-flows-story

## Requirements

Node.js `>= 20.19`, `>= 22.13` or `>= 24` (Vite 8 / Vitest 4 / jsdom 29).

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs Storybook in development mode on [http://localhost:6006](http://localhost:6006).
This is where the flows live — it is the main thing you want when working on this repo.

### `yarn build-storybook`

Builds the Storybook to the `storybook-static` folder. This is what gets deployed.

### `yarn deploy`

Builds the Storybook and publishes it to the `deploy` branch with `gh-pages`.

### `yarn start`

Runs the (mostly empty) React app in development mode on
[http://localhost:5173](http://localhost:5173).

### `yarn build`

Type-checks the project and builds the React app to the `build` folder.

### `yarn test`

Runs the test suite once with [Vitest](https://vitest.dev/).

## Stack

The project was originally bootstrapped with Create React App and Storybook 6. It now
uses [Vite](https://vite.dev/) for bundling, [Vitest](https://vitest.dev/) for tests and
Storybook 10 with the `@storybook/react-vite` framework. Stories are written in
[CSF 3](https://storybook.js.org/docs/api/csf).
