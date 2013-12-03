/*
* This is the search view and currently the main view
* of the application. The template it loads contains
* input box for entering the search queries and also
* the container for the search results.
*/
var SearchView = Backbone.View.extend({

    searchTimer: null,
    searchTerm: null,
    
    events: {
        "keydown .searchbox": "onKeyDown"
    },

    initialize: function() {
        if(ITV.LOG) console.log('SearchView.initialize');

        this.template = $("#searchViewTemplate").html();
    },

    // overriding the base render to show custom template
    render: function(eventName) {
        var that = this;
        if(ITV.LOG) console.log('SearchView.render');

        this.$el.html(_.template(this.template,{}));

        return this;
    },

    // initiate a search for the query term
    startSearch: function() {
        if(ITV.LOG) console.log('SearchView.startSearch');
        if (!this.searchView) {
            // instantiate the searchresultsview if it is not already created
            this.searchView = new SearchResultsView({ collection: ITV.app.collections.searchCollection, el: '.resultArea' });
        }

        if (this.searchTerm && this.searchTerm === $('input[id=searchField]').val()) {
            if(ITV.LOG) console.log('Nothing changed, ignore');
            return;
        }
        this.searchTerm = $('input[id=searchField]').val();

        this.clearSearch();    // clear the view before populating it again
        this.searchView.fetchSearchResults(this.searchTerm);    // ask the subview to fetch the results for us
    },

    clearSearch: function() {
        if (this.searchView) {
            this.searchView.$el.html("");
        }
    },

    onKeyDown: function(event) {
        clearTimeout(this.searchTimer);
        if (event.keyCode === 13) {
          // if enter search right now
          this.startSearch();
          event.preventDefault();
        } else {
          // otherwise set a timer to search after a while
          this.searchTimer = setTimeout(this.typingPaused.bind(this), 500);
        }
    },

    typingPaused: function() {
        this.startSearch();    // timer expired, take the search term and call fetch
    }
});

