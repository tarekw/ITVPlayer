
var SearchResultsView = Backbone.View.extend({

	events: {
	},

	initialize: function() {
		if(ITV.LOG) console.log('SearchResultsView.initialize');
		this.template = $("#searchItemTemplate").html();

		this.collection.on("add", this.addResult, this);

	},

	render: function() {
		if(ITV.LOG) console.log('SearchResultsView.render');
		var that = this;
	},

	fetchSearchResults: function() {
		var that = this;

		var searchSuccess = function() {
			if(ITV.LOG) console.log('search success');
			that.trigger("searchfinished");
		};

		var searchError = function() {
			if(ITV.LOG) console.error('search error');
		};

		this.collection.fetch( {
			success: searchSuccess,
			error: searchError
		});
	},


	addResult: function(model) {
		if(ITV.LOG) console.log('SearchResultsView.addResult ', model);
		var data = model.toJSON();
		this.$el.append(_.template(this.template,data));
	}

});
