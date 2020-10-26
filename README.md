# SpotifyAngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


#Test Details

In this test, you will write a music search app using the Spotify api, ngxs state
management library and Angular 9+.

Spotify Api: https://developer.spotify.com/documentation/web-api/
NGXS: https://www.ngxs.io/

Pages

#Home Page

1. Home page must have a search field for the user to be able to search for
artists by name.
2. When a user searches for artists, a list must appear listing the search results
below the search bar.
3. Only when the user has stopped typing, must the api call be made.
4. Each search result must have:
    1. Artist name
    2. Genres
5. On clicking on a search result from the list, the user must be navigated to the
“Artist’s Page”
6. On the right bottom corner of the page, there must be a “Search History”
widget.
7. The “Search History” widget, must have a list of all the past users search
history.
8. Each entry within the search history, must navigate the user to the Artists
page on click.

#Artists Page
1. The artists page must contain a list of Albums as cards, in a Grid pattern.
2. Each album card in the grid, must have:
    1. A border
    2. Album image
    3. An “Album Details” button
3. When the user clicks the “Album Details” button, he must be navigated to
the “Album Details Page”

#Album Details Page
1. The album details page must have:
    1. Artists name
    2. The albums name
    3. The album image
    4. Release date
    5. A ordered list of the album’s tracks with:
1. The song name
2.   A “preview track” button to preview the song.

Requirements
1. All api calls must be initiated through the store.
2. All data to be stored within the store.
3. Navigation must be done via the store.
4. Data to be displayed on the UI, must be retrieved from the store using
Selectors.
5. The Artists page, Albums Details Page, must have buttons to go back to the
previous page.
6. Api calls must be kept too as few as possible, using the store as a cache.
7. The app must be responsive.
8. The general styling of the app is left up to the developer and should style it as
best as possible.