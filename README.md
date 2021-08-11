# wefox Frontend Challenge

**This project is a template for the challenge, you can change all the files you consider change**, it was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre-requisites
- Docker
- Git

## What we want
Open a repo in Github/GitLab/Bitbucket (send it to us, so we can see the progress) and build a dummy app that:

### Required
- Runs locally the API using docker-compose (you've available the config on `docker-compose.yml` file)
- Use the Dockerized API that operates over a single resource called posts (check “API usage specification” for more information)
- Contains an React client that consumes that API and can:
    - List, show, create, update, and remove that resource
- Write the client side with Typescript

### Optional
- You can use a CSS framework if it helps in the UI
- You can deploy the application somewhere (netlify or heroku can be suitable options) so we can play with it easily

### Notes
- The client side doesn't have to be dockerized, is up to you
- **When the test is delivered there shouldn't be more changes in the repository**, if you want to continue making changes, please make them in a separate branch

### Extra points
- **Creativity**

    You can add extra & cool features, for example: Create a DataTable to list posts, play with lat/long fields adding a map, etc
- **Tests**
    
    You can add unit or integration tests to ensure that the code is working as expected

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
