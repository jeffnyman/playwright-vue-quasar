# Jeff's Vue Quasar App (playwright-vue-quasar)

The focus here is Playwright within a Vue+Quasar context. To keep this idea pedagogically reproducible, I simply created a standard Vue and Quasar project, made a few tweaks to the internals and then provided tests.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/en). The LTS version should be fine. You will also need the `npm` package manager (which comes with Node.js) or `yarn`. A development environment or IDE with TypeScript/JavaScript support will help. [Visual Studio Code](https://code.visualstudio.com/) is a good choice.

## Execution

Clone the repository and then set everything up:

```shell
npm ci
```

The reason for `npm ci` over `npm install` is covered best in this [Stack Overflow answer](https://stackoverflow.com/a/53325242).

Make sure to install the Playwright browsers:

```shell
npx playwright install
```

You can start up a development server if you want to see how the application itself works.

```shell
npm run dev
```

To run the tests, you can just do this:

```shell
npm run test
```

Note that this will start up a development server for you before the tests are run.
