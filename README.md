 ![don Pablo](https://donpablonow.github.io/assets/img/signature.png)

# The Spotify Angular Assement

In this test, you will write a music search app using the Spotify api, ngxs state management library and Angular 9+

![Angular](https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36)

# Table of Contents

  * [Pages](#📢-pages)
    * [Home Page](#📋-home-page)
    * [Artists Page](#📋-artists-page)
    * [Album Details Page](#📋-album-details-page)
  * [Requirements](#📋-requirements)
  * [Project Details](#📢-project-details)
    * [Development Server](#▫️-development-server)
    * [Code Scaffolding](#▫️-code-scaffolding)
    * [Build](#▫️-build)
    * [Running Unit Tests](#▫️-running-unit-tests)
    * [Running end-to-end Tests](#▫️-running-end-to-end-tests)
  * [Further Help](#📢-further-help)
  * [Contacts](#📢-contacts)

# 📢 Pages

### 📋 Home Page 

✅ Home page must have a search field for the user to be able to search for
artists by name.

✅ When a user searches for artists, a list must appear listing the search results
below the search bar.

✅ Only when the user has stopped typing, must the api call be made.

✅ Each search result must have:

    ✔️  Artist name
    ✔️  Genres
   
⬛ On clicking on a search result from the list, the user must be navigated to the
“Artist’s Page”

⬛ On the right bottom corner of the page, there must be a “Search History”
widget.

⬛ The “Search History” widget, must have a list of all the past users search
history.

⬛ Each entry within the search history, must navigate the user to the Artists
page on click.

### 📋 Artists Page

⬛ The artists page must contain a list of Albums as cards, in a Grid pattern.

⬛ Each album card in the grid, must have:

    ◼️ A border
    ◼️ Album image
    ◼️ An “Album Details” button

⬛ When the user clicks the “Album Details” button, he must be navigated to
the “Album Details Page”

### 📋 Album Details Page

⬛ The album details page must have:

    ◼️ Artists name
    ◼️ The albums name
    ◼️ The album image
    ◼️ Release date
    ◼️ A ordered list of the album’s tracks with:
    
         ◼️ The song name
         ◼️ A “preview track” button to preview the song.

### 📋 Requirements

⬛ All api calls must be initiated through the store.

⬛ All data to be stored within the store.

⬛ Navigation must be done via the store.

⬛ Data to be displayed on the UI, must be retrieved from the store using
Selectors.

⬛ The Artists page, Albums Details Page, must have buttons to go back to the
previous page.

⬛ Api calls must be kept too as few as possible, using the store as a cache.

⬛ The app must be responsive.

⬛ The general styling of the app is left up to the developer and should style it as
best as possible.

# 📢 Project Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## ▫️ Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## ▫️ Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## ▫️ Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## ▫️ Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## ▫️ Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# 📢 Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# 📢 Contacts

For more information please contact don Pablo: https://donpablonow.github.io/contact