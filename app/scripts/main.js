var ITV = ITV || {};
ITV.LOG = true;

ITV.app = {

    start: function() {
        var that = this;

        // create the necessary collections used in the app
        this.collections = {
            searchCollection: new ITV.SearchCollection({})
        };

        // create the main views in the app, subviews are created
        // when required by the main view
        this.views = {
            searchView: new ITV.SearchView({el: '#SearchView'})
        };

        // instantiate the router for handling urls, currently
        // there is only one route
        this.router = new ITV.AppRouter(this);

        // tell backbone to manage the history stack
        Backbone.history.start();
    },
};

/*
* Main application entry point. When the document is ready, start the app
*/
$(document).ready(function(){

    ITV.app.start();

});
