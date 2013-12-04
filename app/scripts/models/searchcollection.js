/*
* The main collection for handling any search related queries.
* It makes the request to the appropriate endpoint, parses and
* cleans up the result and makes it available to any views that
* require the information
*/
var SearchCollection = Backbone.Collection.extend({

    lastJqXhr: null,
    url: undefined,

    fetch: function(options) {
        if(ITV.LOG) console.log("SearchCollection fetch");
        if(!options) options = {};

        var jqXhr = null;

        // ensure the previous request has been aborted if still active
        if(this.lastJqXhr && this.lastJqXhr.readyState && this.lastJqXhr.readyState!=4) {
            if(ITV.LOG) console.log("Last request aborted");
            this.lastJqXhr.abort();
        }

        try {
            this.url = ITV.Urls.getSearchUrl(options.searchTerm);
        } catch (err) {
            console.log("Error thrown: ", err);
            return;
        }

        options.dataType="json";
        jqXhr = Backbone.Collection.prototype.fetch.call(this, options);    // let the base class handle the request
        this.lastJqXhr = jqXhr;

        return jqXhr;
    },

    // parse the search results comming from the fetch request. this is
    // automatically called by backbone. here we have the chance to clean
    // up the response and provide only the necessary information to the view
    parse: function(response, xhr, alreadyJson) {
        if(ITV.LOG) console.log("SearchCollection parse", response);

        if(!response || !response.Result || response.Result.length === 0) {
            if(ITV.LOG) console.log("No response.");
            return;
        }

        // the Details array contains all the programme information
        // TODO the result array might contain irrelevant data, we should
        // check 'Key' to make sure it matches our search term
        return response.Result[0].Details;
    },

});
