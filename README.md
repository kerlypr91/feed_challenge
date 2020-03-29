## Feed Challenge Documentation

- Features currently suppored:<br />
  -- Displaying List of Posts fetched from the endpoint (route : /posts)<br />
  -- Each of this posts has a link to navigate to the Comments page<br />
  -- In the Comments Page, we list all the comments fetched from the api (and save on our redux)<br />
  -- In the Comments Page, we have a section to add a new comment per post (and saved to our redux)<br />
  -- Responsive design<br />

- Libraries added to project:<br />
  -- APISAUCE -> to make api calls to the endpoints given<br />
  -- SASS -> for styling<br />
  -- REDUX -> for app state managemente<br />
  -- REDUX SAGA -> to handle action effects<br />
  -- FONT AWESOME -> to display some icons<br />
  -- PROPTYPES -> to validate props passed to our components<br />
  -- REACT ROUTER -> to navigate withing the routes build for our app<br />

- The project has been divided into different folders:<br />
  -- API : where the endpoints calls and urls are saved and called<br />
  -- Actions<br />
  -- Reducers<br />
  -- Stores<br />
  -- Sagas<br />
  -- Components: smallest elements that could be used among the app<br />
  -- Containers: this ones are the screens per route we built. The Main Container is the one that has inside the router and the "layout" styles shared among our screens, like for example including a footer<br />
  -- There is one route.js file in the root folder, so it's easier to mantain and declare routes. Each of those routes is paired with each component<br />

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

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
