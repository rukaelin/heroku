module.exports = {
    setupSchedules: function () {
        //const { sendMessage } = require('./telegram');
        //const schedule = require('node-schedule');
        // schedule.scheduleJob('*/10 * * * *', () => {
        //     sendMessage("it is currently " + (new Date()).toString())
        // });
        console.log(module.exports.sendTodaysCssGoodie());
    },
    sendTodaysCssGoodie: function () {
        const axios = require('axios');
        axios.get('https://enjoy365.ch/top-deals/').then(response => {
            const regex = new RegExp(/<a href="(https:\/\/enjoy365.ch\/[^"]*)"\s*title="([^"]*)"/, 'i');
            const res = response.data.match(regex);

            cssGoodieUrl = res[1];
            cssGoodieName = res[2];

            const { sendMessage } = require('./telegram');
            sendMessage("todays CSS goodie is \"" + cssGoodieName + '\", details here ' + cssGoodieUrl);

            console.log(cssGoodieName);
            console.log(cssGoodieUrl);
        })
    }
}
