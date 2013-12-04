ITVPlayer
=========

## Description

ITVPlayer is a simple JavaScript application that loads a single page with an input box. As the user starts entering text in the box the app does queries against the mercury.itv.com api to retrieve the results for the search terms and display them in a list. This sample application aims to demonstrate some modern web development concepts:

- HTML5, JavaScript, CSS
- Demonstrable understanding of OOP concepts, separations of concerns, design patterns
- Maintainable/Testable code, TDD
- Appropriate use of frameworks and bespoke code
- Package/Dependency management

## Important note

This project has dependency on node (npm) and bower. To start, please install node and ruby (for compass) and execute the following commands: **npm install -g grunt-cli bower**, and then in the project directory: **npm install && bower install**

## Technical Description

ITVPlayer is be coded mostly using HTML5/Javascript/CSS3 using a set of tools/libraries described below:
* **Yeoman** : Generates the structure of the project
* **Bower** : A dependency management too for web apps
* **Grunt** : Builds/runs/tests the project
* **Backbone JS** : Javscript MVC Framework
* **Underscore** : Templating/utility engine for Backbone
* **jQuery** : A utility library used by many

## Usage

A local dev server serving on http://localhost:9000 can then be started with **grunt serve**. To test the application, just point a browser to this url and you're good to go.

## Todo

## Screenshots

<img src="https://github.com/tarekw/ITVPlayer/raw/master/screenshots/chrome-firefox-ie.png" height="500px" />