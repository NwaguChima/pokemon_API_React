## I proceeded with fetching my data from the api using axios and I saved my had a context to manage gobal state that i wanted available for all components. I Fetched the Pokemon and then used their Url to fetch their details, I used promise.all to resolve them all. The render and pagination was fully implemented. On click of the next button, It fetches the next 16, as I rendederd 16 per page, and buttons are duely disabled when not available page. I rendered details on a modal which was directly put in the dom. searching for keywords fetched the entire items from the api and filtered them for search keyword. Page was fully responsive and Test was written. If I had more time, I would write a complete test for the application, and also ensure cleaner implementations. I would also try to optimize the search result.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
