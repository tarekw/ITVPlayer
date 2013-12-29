var zombie = require('zombie');

var World = function(callback){
    var that = this;
    var browser = new zombie({debug:true});

    var pageLoaded = function(window) {
        return window.document.readyState === 'complete';
    }

    browser.location = "http://127.0.0.1:9000/index.html";
    browser.wait(pageLoaded, function() {
        callback(that);
    });

    this.checkUrl = function (term, callback) {
        if (browser) {
            var itv = browser.window.ITV;
            var url = itv.Urls.getSearchUrl(term);
            console.log("url is ", url);

            if (url && url !== '') {
                callback();
            } else {
                callback.fail("not a valid api path");
            }
        } else {
            callback.fail("Browser does not exist");
        }
    }
};

exports.World = World;
