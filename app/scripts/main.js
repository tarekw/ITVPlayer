var ITV = ITV || {};

ITV.app = {

	start: function() {
		var that = this;

		this.models = {
			// search: new SearchModel()
		};

		this.collections = {
			// searchCollection: new SearchCollection(null, {})
		};

		this.views = {
			// searchView: new SearchView({el: '#SearchView', template: '#searchTemplate'})
		};

		// this.router = new AppRouter(this);

		Backbone.history.start();

		this.bindEvents();
		this.startupRequests();
	},

	bindEvents: function() {
		var that = this;

	},

	startupRequests: function() {
		if(ITV.LOG) console.log("Starting requests...");

	},

};

$(document).ready(function(){

	ITV.app.start();

});
