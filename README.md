# MbqtF1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Demo

The demo is hosted in a Github Page. 

[Open the demo](https://vinagreti.github.io/mbqt-f1/)

## Running

Clone, enter, install, serve...

1. Clone: `git clone https://github.com/vinagreti/mbqt-f1`
2. Go to root folder: `cd mbqt-f1`
3. Install dependencies: `npm i`
4. Serve locally: `ng s`
5. Open your browser e go to `localhost:4200`
6. ;)

## Problem solved

This Single Page Application was designed to show the Formula 1 champions by year.
When a year is selected, we can see all races from that year and which one the champion won.

## Architecture

We use only angular in this project and the `@angular/cli` to scaffolding the pieces.

The folder structure is ready for large systems.

### /core

The core folder hosts modules that are used by the entire application but need to be load only once, usually in the `AppModule`.

### /pages

The pages folder hosts the routes and pages where all the magic components are used.

It usually contain the business logic that in many cases are decisions if a presentations component should be displayed or not.

### /shared

The shared folder hosts all services, directives, pipes, modules and non logical components.

This is where we build the magic.

It is a best practice to separate presentation components from logic ones. This way you can improve reusability.

## Cache

The data retrieved from the API s hosted in localStorage so we do not need to load it twice.

To remove the cache you can clean the localStorage or run the following command in the browser console

```javascript
localStorage.removeItem('MBQT_F1_DATA_CACHE');
```

## PWA - Progressive Web App

This application can be installed in your computer or mobile device. This makes it faster to start and give a better performance and accessibility

## Offline

You can access it offline and see all data you have cached.