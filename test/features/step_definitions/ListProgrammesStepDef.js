var aTest = function () {
    this.World = require("../support/world.js").World;

    var searchterm = "";
    this.Given(/^a term set to (\w)$/, function(term, callback) {
        this.searchterm = term;
        callback();
    });

    this.Then(/^a valid url path should be returned$/, function(callback) {
        this.checkUrl(this.searchterm, callback);
    });
};

module.exports = aTest;
