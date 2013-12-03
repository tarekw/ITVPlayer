
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

	render: function(eventName) {
		var that = this;
		if(ITV.LOG) console.log('SearchView.render');

		this.$el.html(_.template(this.template,{}));

		return this;
	},

	startSearch: function() {
		if(ITV.LOG) console.log('SearchView.startSearch');
		if (!this.searchView) {
			this.searchView = new SearchResultsView({ collection: ITV.app.collections.searchCollection, el: '.resultArea' });
		}

		if (this.searchTerm && this.searchTerm === $('input[id=searchField]').val()) {
			if(ITV.LOG) console.log('Nothing changed, ignore');
			return;
		}
		this.searchTerm = $('input[id=searchField]').val();

		this.clearSearch();
		this.searchView.fetchSearchResults(this.searchTerm);
	},

	clearSearch: function() {
		if (this.searchView) {
			this.searchView.$el.html("");
		}
	},

	onKeyDown: function (event) {
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

	typingPaused: function () {
		this.startSearch();
	}
});

