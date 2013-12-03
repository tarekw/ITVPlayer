var SearchCollection = Backbone.Collection.extend({

	lastJqXhr: null,
	model: SearchModel,
	url: "/api/json/dotcom/programme/searchatoz/a",

	initialize: function(options) {
	},

	fetch: function(options) {
		if(ITV.LOG) console.log("SearchCollection fetch");
		if(!options) (options = {});

		var jqXhr = null;

		// ensure the previous request has been aborted if still active
		if(this.lastJqXhr && this.lastJqXhr.readyState && this.lastJqXhr.readyState!=4) {
			if(ITV.LOG) console.log("Last request aborted");
			this.lastJqXhr.abort();
		}

		options.dataType="json";
		jqXhr = Backbone.Collection.prototype.fetch.call(this, options);
		this.lastJqXhr = jqXhr;

		return jqXhr;
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
