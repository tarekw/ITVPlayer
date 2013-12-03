
var SearchView = Backbone.View.extend({

	events: {
		"click .search": "startSearch"
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
			this.searchView = new SearchResultsView({ collection: ITV.app.collections.searchCollection, el: '#resultArea' });
			this.searchView.fetchSearchResults();
		}
	},

	clearSearch: function() {
	}
});

