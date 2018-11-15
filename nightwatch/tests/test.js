var fs = require('fs')

module.exports = {

    'Demo test' : function (browser) {
        browser
            .url('http://vote.mil.ru/vote/krnd.htm')
        for (var i=0; i<1000; i++) {
            browser
                .waitForElementVisible('#answer_12166253', 5000)
                .click('#answer_12166253')
                .waitForElementVisible('.vote form input[type="submit"]', 5000)
                .click('.vote form input[type="submit"]')
        }
    }

};
