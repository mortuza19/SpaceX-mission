# SpaceXProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19. Apart from Angular 8, it uses pure CSS3 & HTML5 to render UI in the browser. It uses @media query to make the site responsive.

## Technical Details
The project has basically consist of 5 components. Component tree provided below.

launch-page-container
    launch-mission-body
        launch-mission-item
    launch-filter-body
progress-spinner

The "launch-page-container" holds the header & footer. It renders two child component mentioned above.

The "launch-mission-body" holds the area where the cards will be shown. It interact with the API & iterate the data by sending each card data to its child component.

The "launch-mission-item" renders each card that has been shown in the UI.

The "launch-filter-body" holds all the filter choice hard coded in the class. On clicking on any filter,
the data gets updated.


Services & other dependencies:

A "data-service" class is created that sends the request to API & return the data as Observables to the components. It also holds a subject, that keep tracks on the filter applied.

A "route-guard" is also added to prevent the manual update of url by user.

## SSR & Test Case

The server side rendering has been done using Angular Universal. A small express server is created to host the application locally.

A list of unit test cases are written & updated in git server. please check the Testcase folder.

## Web hosting

I have used "heroku" to host the application globally. The link is added below - 

https://spacex-project-001.herokuapp.com/

## Lighhhouse score

The Lighthouse report is added to the "Lighthouse Score" folder. Please look into it. Also I have added a report analysis doc file to explain the scores.

Performance - 65
Accessibility - 95
Best Practice - 93
SEO - 92

## Workflow description

Opening the application will show 100 mission details. Once user choose a filter the data would be updated based on the filter provided. User can use multiple filter together combined from different section of filter, but can choose single filter from a single section. if user selects an already selected filter, the filter gets deselcted or removed.

## Dependency Install

to run the code locally please execute the below commands.

npm i 
npm start
npm run build:ssr
npm run serve:ssr

npm i to install all the dependencies.
npm start to serve the code locally.
npm run build:ssr to build the application using server side rendering
npm run serve:ssr to start the express.js server locally.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
