# Simple Node.js Fastify boilerplate

A simple Node.js server boilerplate using Fastify as the server framework and TypeScript.

## Get started

To get started, simply clone this repo, install all the dependencies and start building up the service.

To run it as development mode, simply run the following command:

```sh
yarn start:dev
```

Alternatively, to run it as production mode, simply run the following command:

```sh
yarn start
```

The command above will compile the TypeScript code and output a `build` folder.

For testing, it uses `jest` as the testing framework and it could be executed by running the following command:

```sh
yarn test
```

## Others

It's worth noting that this boilerplate also comes with formatting and linting using bare minimal config as a starter.

It uses ***prettier*** for its formatting tool and ***typescript-eslint*** for its linting config. Besides that, it will also run a `pre-commit` hook.
