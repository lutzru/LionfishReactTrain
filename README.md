# TODO: add name of the project here

## Project Basics

TODO: write a general description of the project

### IDE for project

This project is edited mainly in Visual Studio Code and contains settings in the `.vscode ` to help with that. If another editor is used please make sure to enforce the same code styles, specifically:

- unix line breaks
- code always formatted by prettier using the settings in the `.prettierrc.js` file
- imports are auto optimized and sorted

This leads to high code consistency and easier merging, because all code is comitted in the same format.

There are also recommended plugins that help with the editing experience. Using VSC it should inform you on opening the project and offer to install all relevant plugins.
They are:

- **local history** - adds a powerful history to VSC, where each file is copied as a new version into the `.history` folder in the root, giving you access to all old versions of your files. This folder is git-ignored.

- **Blueprint** - offers easy creation of multi file structures from templates. Used i.e. for components. Templates are in `blueprint-templates` folder

- **Import costs** - shows the "weight" in kb next to each import

- **Material icon theme** - this just adds themed icons to VSC to make distinguishing the different file types easier

- **Todo highlight** - this plugin highlights `TODO:` or `FIXME:` in sourcecode with bright colors

## Client

The frontend of this project can be found in the `client` directory and is a react based SPA.
Find relevant information about the client project in the `README.md` in the client folder.

## GraphQL

Contains only the GraphQL schema definition, from which the client can generate Typescript types and the backend can generate resolvers or at least stubs. If graphQL is used, this should be the single source of truth for both front- and backend.

## Docker

The docker folder contains all the scripts to build backend and/or frontend into docker images.

## Definitions

### Definition of done

TODO: specify the project definition of done here. Modify example:

Components:

- Component visible in Storybook
- Snapshot test written and output reviewed
- Responsiveness tested for different viewport sizes from 320px to 1900px
- Issue acceptance criteria met 𝥀
- Test suite green
- If needed: documentation updated 𝥀

Pages:

- Page can be called up in the browser inside the application
- Page has its own route
- Cypress test covers the functionality in the page using TestIDs
- Responsiveness tested for different viewport sizes from 320px to 1900px
- Issue acceptance criteria met 𝥀
- All cypress tests green
- If needed: Documentation updated 𝥀

### Definition of ready

TODO: add your definition of ready here
