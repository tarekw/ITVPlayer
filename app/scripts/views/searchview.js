
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
		this.collection.fetch( {
			// success: loadSuccess,
			// error: loadError,
		});

	},

	clearSearch: function() {
	}
});

