var SearchCollection = Backbone.Collection.extend({

	model: SearchModel,
	url: "/api/json/dotcom/programme/searchatoz/a",

	initialize: function(options) {
	},

	fetch: function(options) {
		if(ITV.LOG) console.log("SearchCollection fetch");
		if(!options) (options = {});

		options.dataType="json";
		Backbone.Collection.prototype.fetch.call(this, options);
	},

	parse: function(response, xhr, alreadyJson) {
		if(ITV.LOG) console.log("SearchCollection parse", response);

		if(!response) {
			if(ITV.LOG) console.log("No response.");
			return;
		}

		return response.Result[0].Details;
	},

});
