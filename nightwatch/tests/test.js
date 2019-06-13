var fs = require('fs')

module.exports = {

    'Demo test' : function (browser) {
        browser
            .url('https://example.com')
        for (var i=0; i<1000; i++) {
            browser
                .waitForElementVisible('#element', 5000)
                .click('#element')
                .waitForElementVisible('.vote form input[type="submit"]', 5000)
                .click('.vote form input[type="submit"]')
        }
    }

};
