# Auk Order Status #
![.github/workflows/web.yml](https://github.com/aukeco/auk-order-status/workflows/.github/workflows/web.yml/badge.svg)
![.github/workflows/server.yml](https://github.com/aukeco/auk-order-status/workflows/.github/workflows/server.yml/badge.svg)
----

## Overview ##
This repository showcases a bunch of different technologies and frameworks that I use when developing React projects, combined into an opinionated boilerplate.

## Features ##
- [Typescript](http://www.typescriptlang.org/) for type-checking
- [TSLint](https://palantir.github.io/tslint/) to ensure consistent style
- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)
- [Redux](https://redux.js.org/) + [Redux Saga](https://redux-saga.js.org/)
- [Cypress](https://www.cypress.io/) for end-to-end testing
- [Jest](https://facebook.github.io/jest/) for unit/snapshot testing
- Code coverage from [coveralls.io](https://coveralls.io/)
- [Webpack](https://webpack.js.org/)
  - Hot Module Reloading
  - Bundle hashing to allow for easy caching (npm dependencies are also splitted so that you can update your source code without making the user reload the vendor bundle)
- [less](http://lesscss.org/) support
- Autoprefixing with [PostCSS](http://postcss.org/)
- [Stylelint](https://stylelint.io/) for linting less/CSS
- [Github Actions](https://github.com/aukeco/auk-order-status/actions) for CI

To get started, run `yarn` to fetch dependencies and `yarn dev` to start the development server
