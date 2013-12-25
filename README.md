ITVPlayer
=========

## Description

ITVPlayer is a simple JavaScript application that loads a single page with an input box. As the user starts entering text in the box the app does queries against the mercury.itv.com api to retrieve the results for the search terms and display them in a list. This sample application aims to demonstrate some modern web development concepts:

- HTML5, JavaScript, CSS3
- Demonstrable understanding of OOP concepts, separations of concerns, design patterns
- Maintainable/Testable code, TDD/BDD
- Appropriate use of frameworks and bespoke code
- Package/Dependency management

## Important note

This project has dependency on node (npm), grunt, bower and ruby (for compass). To start, please install NodeJS (http://nodejs.org/download), compass (http://compass-style.org/install/) and execute the following commands on a terminal/cmd prompt: **npm install -g grunt-cli bower**. Then in the project directory: **npm install && bower install**. This should download and install all the necessary dependencies into the project directory. Please note, these commands only need to be executed once.

## Usage

After the initial setup (explained above), a local dev server serving on http://localhost:9000 can then be started with the command **grunt serve**. A browser window should automatically open with the app running. If it doesn't, just point your browser to the above url and you're good to go. Search queries are made against actual api (at mercury.itv.com) and not a dummy server. This is made possible by the grunt connect proxy which allows us to get past browser security policies for our test purposes. If the code is modified, the browser will update automatically to reflect the change.

To execute the tests associated with the project, just run the command **grunt test**.

Project has been tested on Windows 7/8/Mac and on browsers Chrome/Firefox/IE.

## Technical Description

ITVPlayer is coded mostly in HTML5/JavaScript/CSS3 using a set of tools/libraries described below:
* **Yeoman** : Generates the structure of the project
* **Bower** : A dependency management too for web apps
* **Grunt** : Builds/runs/tests the project
* **Backbone** : Javscript MVC Framework
* **Underscore** : Templating/utility engine for Backbone
* **jQuery** : A utility library used by many

## Improvements

* Add some more tests for validating the collection/model - DONE
* Do some DOM testing with phantomJS
* If project expands, might consider moving to a more composite application architecture
* Test the grunt build scripts to build a package for deployment on the live server
* Separate the templates from the index - DONE
* Set up continuous integration (e.g. with Jenkins)

## Screenshots

<img src="https://github.com/tarekw/ITVPlayer/raw/master/screenshots/chrome-firefox-ie.png"/>


For any feedback/question, feel free to contact me: tarek@wahab.me.uk

Thanks!
