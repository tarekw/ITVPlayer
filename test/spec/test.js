/*global describe, it */
'use strict';
(function () {
    describe('Test suite for utility functions\n', function () {
        describe('Test utility function in urls\n', function () {
            // basic url patterns
            var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
            var apiPattern = /api\/([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;

            it('urls returned with valid search term should be the correct format', function () {

                var url = ITV.Urls.getSearchUrl('a');

                expect(url).to.be.a('string');
                expect(url).to.not.match(urlPattern);   // our url doesn't start with http/ftp/https
                expect(url).to.match(apiPattern);
            });

            // TODO add more tests here
        });
    });
})();
