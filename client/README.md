# The client

This is a react based single page application.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn generate`

This generates Typescript definitions into the types.ts file based on the GraphQL schema. The schema is located in the folder `graphql` in the root of this project. The types.ts will be placed in the `client/src/graphql` directory. The code generation is configures through the `src/codegen.yml` file.

### `yarn ts`

Run the typescript compiler in watch mode, so it monitors all files and checks for errors. VSC does this for you, but some IDEs may not.

### `yarn ts:ci`

For running the typescript linting in the ci pipeline

### `yarn ts:lint`

For running the linting in the ci pipeline

### `yarn test:run`

Runs all tests once and continues (no watch mode)

### `yarn test`

Runs the Jest test runner in interactive mode

### `yarn countCommits`

This runs a short bash command to count how many individual commits are in this branch. The value is written into the `.env` file from where it can be used inside react to display.

### `yarn cypress:run`

This starts cypress with a headless browser on the commandline (no visual interface), runs all the tests and quits.

### `yarn cypress:open`

This opens cypress with a visible browser to run the tests in.

### `yarn storybook`

This starts storybook, a helper tool that lets one develop React components in isolation.

## Storybook

In this project we employ Storybook as a harness for developing react components in isolation. To run it use `yarn storybook`. This will fire up storybook in your browser and you can see the current status of and develop components there. The navigation on the left lists all stories as they are (automatically) found in the directories of the components. Components can showcase different possible setups, content lenghts, configurations to test all aspects are working correctly. Storybook allows very easy adding of UI elements which control props of a component. This way things like text can be interactively tested by changing the text of i.e. a button to see if it cuts off the text correctly if the text is too long.

The blueprint for a functional component contains a default `.stories.tsx` file that can be extended for the actual component. The configuration for storybook is done in the `client/.storybook` directory. Stories are auto-discovered and the configuration sets the Material UI library up correctly.

## Testing

Testing is done through several means. We cover our basic components with Jest and Enzyme / React-Test-Renderer by comitting snapshots to the repo. Basically we hand-check a component, check the functionality and the resulting HTML and freeze this state with a snapshot. If the snapshot remains unchanged the state is considered tested.

For functions we write unit tests also using Jest where we pass parameter sets into the functions to validate that they perform the right actions.

The second stage is that we have a setup which allows to run full end to end tests with cypress against the application, also inside the build pipleline.

## Cypress

Cypress is a very powerful frontend end to end testing framework. It is used in this project to maintain a comprehensive automated end to end test suite. Cypress starts a browser either in headless mode (CLI) or an actual window. It works with Chrome, Edge and Firefox. The cypress folder contains the test suite. We try to test as much functionality for each view as we can in an automated way. We use TestIDs to adress elements in the views and components once they are rendered. The TestIDs we keep/generate in the `utils/TestIDs.ts` file.

### Running the tests

Use `yarn test` to run an interactive mode of the Jest test runner, where it watches the files and reloads and executes the tests as you make changes. Help is shown in the CLI for re running all tests etc.

User `yarn test:run` to simply execute the test suite once. This is also done in the ci/cd pipeline to verify all tests pass before builiding the application.

### Joint coverage

We employ istanbul/nyc to merge coverage reports from both the jest test runner as well as the cypress report. This way the joint coverage can be reviewed. The setup merges the two with support for the sourcemaps, so that the report will list untested lines in the typescript files correctly.

## About .env

When we have environment variables in the client, and we build the client, these variables cannot be changed anymore without building the client again. In most cases it's going to be better if we get the variables from the server instead. But as this is a template, we want to show all possibilities.

## Suggested packages for special situations

-   clsx -> To have class names combined
-   lodash -> To do array / collection operations. Deepcloning, Deepequals...
-   date-fns -> For doing operations with dates

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
