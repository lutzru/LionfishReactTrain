# The server

This is a node based server using the Typescript transpiler so code can be written in TS instead of plain JS.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in production mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run dev`

Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### `npm run lint`

Runs the eslint linter to check for warnings or errors. In VS Code this is done automatically in the background and code highlights should be displayed.

## Configuration

There are two config files that govern the behavior of Typescript.

1.  The `tsconfig.json` defines settings for the Typescript compiler. It is extensively commented with a bunch of possible options

2.  The `.eslintrc.js` controls the eslint linter that will check the code and output warnings if there are any. The required plugins for parsing and linting Typescript are part of the package.json

## Logging

The `logging.ts` contains a setup of a basic logger which logs either to just a logfile or also to the console, if in development mode. It uses the winston package. You can adapt the log format and channels here. Examples of how to log are in the app.json

## Configuring the client

There is an example of a route for a config which can be used to load a `config.js` file from the node server into the client which specifies values that cna depend on the environment (production/staging/development). This can be used i.e. for an API URL which might be different in all environments.
