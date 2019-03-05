# BarBeerDrinkerUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## About My Database

My database is on the AWS cloud. I have removed the URL and key for safety reasons. The schema is Bar-Beer-Drinker. There are 4 entity tables and 4 relational tables. There is the drinker, item, bar, and bill tables, which are the entity ones. Then, there are the Likes, Frequents, Sells, and Transaction tables, whihc are the relational tables. In summary, the database has a collection of people, where the people live, bars, where the bars are located, things the bar sells, bills at at the bars, what drinks people like, what bars people frequent, what items bars sell, and information about the bills, called transactions.

## About My User Interface

There are multiple pages. The different pages all have their own folder under src -> app. There is a page for All Drinkers, all Bars, all Items. The Drinkers page is stored in 'drinkers', the Bars page is stored under 'welcome', the Items page is stored under 'items'. Each page was a table, which listed that table of the database. For example, if on the Drinkers page, you could see all drinkers stored in the dtaabase and all information about that drinker. Each drinkers name was an HTTP link, which brought you to a table that showed many fact about the drinker, including spending habits and products (drinks/items) that they liked, in bar graphs. The same can be said about the bars and items pages, which show details of the bar/item when it's name was clicked. The corresponding pages can be found under 'drinker-details', 'bar-details', and 'item-details'. There is also a modifications page, which took user input (in MySQL language) in order to modify the database. The database then decide to accept/reject based upon key restraints and enforced constraints on the data.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
