var ITV = ITV || {};

ITV.Urls = function() {
    var API_ENDPOINT = "/api/";
    var TARGET = "json";
    var PLATFORM = "dotcom";
    var PROGRAM_ENDPOINT = "/programme/searchatoz/";

    return {
        // currently the only requied url. add more
        // getters here in the future when required
        getSearchUrl: function(searchTerm) {
          
          // do some validity checks for the searchTerm
          if (!searchTerm) {
            throw "search term can only be a string";
          } else if (searchTerm === '') {
            throw "search term empty";
          } else if (searchTerm.length > 100) {
            throw "search term is too long";
          } else if (typeof searchTerm !== 'string') {
            throw "search term can only be a string";
          } else if (searchTerm.indexOf('/') !== -1) {
            // should url encode if we want to allow users to search
            // for this or other special characers
            throw "search term cannot contain a forward slash";
          }

          // everything ok, return the url
          return API_ENDPOINT +
                 TARGET + "/" +
                 PLATFORM +
                 PROGRAM_ENDPOINT +
                 searchTerm;
        }
    }
}();