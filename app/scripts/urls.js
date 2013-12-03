var ITV = ITV || {};
ITV.LOG = true;

ITV.Urls = function() {
    var API_ENDPOINT = "/api/";
    var TARGET = "json";
    var PLATFORM = "dotcom";
    var PROGRAM_ENDPOINT = "/programme/searchatoz/";

    return {
        // currently the only requied url. add more
        // getters here in the future when required
        getSearchUrl: function(searchTerm) {
            return API_ENDPOINT +
                   TARGET + "/" +
                   PLATFORM +
                   PROGRAM_ENDPOINT +
                   searchTerm;
        }
    }
}();