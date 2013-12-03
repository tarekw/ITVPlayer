// Mapping urls into views and actions
var AppRouter = Backbone.Router.extend({

    initialize : function(app) {
        this.app = app;

        var that = this;

    },

    routes : {
        "" : "showSearch"
    },

    showSearch : function() {
        if (ITV.LOG) console.log("AppRouter.showSearch");
        var view = this.app.views.searchView;
        view.render();
    }

});
