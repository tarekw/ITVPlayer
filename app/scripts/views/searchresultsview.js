/*
* Main view for handling the results from the collection. Every time
* the collection is updated, we create the desired template item
* and append it to the container of this view.
*/
var ITV = ITV || {};

ITV.SearchResultsView = Backbone.View.extend({

    initialize: function() {
        if(ITV.LOG) console.log('SearchResultsView.initialize');
        this.template = $("#searchItemTemplate").html();

        this.collection.on("add", this.addResult, this);    // listen for changes to the collection
    },

    fetchSearchResults: function(searchTerm) {
        var that = this;

        if (!searchTerm || searchTerm.length === 0) {
            if(ITV.LOG) console.log("Nothing to search");
            return;
        }
        if(ITV.LOG) console.log("Searching for... ", searchTerm);

        var searchSuccess = function() {
            if(ITV.LOG) console.log('search success');
            that.trigger("searchfinished");    // this will be useful if we want to stop a spinner for example
        };

        var searchError = function() {
            if(ITV.LOG) console.log('search error');
        };

        // ask the underlying collection to fetch the results. it could get the
        // results from anywhere but we don't need to know
        this.collection.fetch( {
            success: searchSuccess,
            error: searchError,
            searchTerm: searchTerm
        });
    },

    // handle changes in the collection
    addResult: function(model) {
        if(ITV.LOG) console.log('SearchResultsView.addResult ', model);
        this.$el.append(_.template(this.template,model.toJSON()));
    }

});
