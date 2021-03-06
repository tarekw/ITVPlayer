/*global describe, it to be or not to be!*/
'use strict';
(function () {
    describe('Test the utility functions /', function () {
        // currently this is the only utility we have
        describe('Test the utility functions in urls js /', function () {
            it('urls returned with valid search term should be the correct format', function () {
                var url = ITV.Urls.getSearchUrl('a');

                expect(url).to.be.a('string');
                // our url doesn't start with http/ftp/https. this is a very basic regex for url testing
                expect(url).to.not.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/);
                expect(url).to.match(/api\/([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/);

                // url is encoded by the backbone fetch call anyway, so we don't worry about it here
                assert.doesNotThrow(function(){return ITV.Urls.getSearchUrl("\'!\"£$%^&*(){}[]<>?,.\\ ")});
            });
            it('urls requests for invalid search term should return error correctly', function () {
                // search term should not be empty
                assert.throw(function(){return ITV.Urls.getSearchUrl('')}, /search term empty/);
                // although the standard allows much more, we have an arbitrary 100 character limit for the search term
                assert.throw(function(){return ITV.Urls.getSearchUrl('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')}, /search term is too long/);

                // test some more invalid stuff here
                assert.throw(function(){return ITV.Urls.getSearchUrl(null)}, /search term can only be a string/);
                assert.throw(function(){return ITV.Urls.getSearchUrl(undefined)}, /search term can only be a string/);
                assert.throw(function(){return ITV.Urls.getSearchUrl({})}, /search term can only be a string/);
                assert.throw(function(){return ITV.Urls.getSearchUrl(true)}, /search term can only be a string/);
                assert.throw(function(){return ITV.Urls.getSearchUrl(false)}, /search term can only be a string/);
                assert.throw(function(){return ITV.Urls.getSearchUrl(function(){})}, /search term can only be a string/);
                assert.throw(function(){return ITV.Urls.getSearchUrl([])}, /search term can only be a string/);
                assert.throw(function(){return ITV.Urls.getSearchUrl(1)}, /search term can only be a string/);
                assert.throw(function(){return ITV.Urls.getSearchUrl('aaa/aaa')}, /search term cannot contain a forward slash/);  // this would break the api call
            });
        });
    });
    
    describe('Test the asynchronous functions /', function() {
        describe('Test the search collection /', function(){
            // at the moment we only have one asynchronous function in the searchcollection
            it('data returned from fetch should be the correct format', function(done) {
                var searchSuccess = function(model, response, options) {
                    expect(response).to.be.a('Object');
                    expect(response.Result).to.be.a('Array');

                    // test that the response object contains the data we need
                    if (response.Result.length > 0) {
                        expect(response.Result[0].Details).to.be.a('Array');
                        _.each(response.Result.Details, function(detail) {
                            expect(detail.Programme).to.be.a('Object');
                            expect(detail.Programme.ImageUri).to.be.a('String');
                            expect(detail.Programme.Programme).to.not.be(undefined);
                            expect(detail.Programme.Programme).to.not.be(null);
                            expect(detail.Programme.Programme.Title).to.be.a('String');
                            expect(detail.Programme.ShortSynopsis).to.be.a('String');
                        });
                    }
                    done();
                };

                var searchError = function(model, response, options) {
                    done(new Error(response.statusText));
                };

                var searchCollection = new ITV.SearchCollection({});

                searchCollection.fetch( {
                    success: searchSuccess,
                    error: searchError,
                    searchTerm: 'a'
                });
            });
            // If the response object is changed in the collection, test them as well.
            // at the moment, the response is used as is.
        });
    });
})();
