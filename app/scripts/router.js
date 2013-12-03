// Mapping urls into views and actions
var AppRouter = Backbone.Router.extend({

    initialize : function(app) {
        this.app = app;
    },

    // all application routes go here
    routes : {
        "" : "showSearch"
    },

    // currently the only handler for the application which
    // creates and shows the search view in the main page
    showSearch : function() {
        if (ITV.LOG) console.log("AppRouter.showSearch");
        var view = this.app.views.searchView;
        view.render();
    }
});
