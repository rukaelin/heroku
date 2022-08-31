module.exports = {
    setupSchedules: function () {
        const { sendMessage } = require('./telegram');
        const schedule = require('node-schedule');
        schedule.scheduleJob('*/10 * * * *', () => {
            sendMessage("it is currently " + (new Date()).toString())
        });
    },
    getCssImageUrl: function (document) {
        const axios = require('axios');
        const html = axios.get('https://enjoy365.ch/top-deals/');
        const tempDocument = document.implentation.createHTMLDocument()
        const tempHtml = document.createElement("html");
        tempHtml.innerHTML = html;
        var links = tempHtml.getElementsByClassName("product-image-link");
        console.log(links[0]);
        return links[0];
    }
}
