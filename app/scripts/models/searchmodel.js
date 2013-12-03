var SearchModel = Backbone.Model.extend({

	url: "/api/json/dotcom/programme/searchatoz/a",

	initialize: function() {
	},

	fetch: function(options) {
		if(ITV.LOG) console.log("SearchModel fetch");
		if(!options) (options = {});

		this.url = undefined;

		var that = this;
	},

	parse: function(response, options) {
		if(ITV.LOG) console.log("SearchModel parse", response);
		var that = this;

		if(!response) return;

		return response;
	},
});

