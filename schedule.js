module.exports = {
    setupSchedules: function () {
        const { sendMessage } = require('./telegram');
        const schedule = require('node-schedule');
        sendMessage("messages scheduled")
        schedule.scheduleJob('*/10 * * * *', () => {
            sendMessage("it is currently " + Date.now().toString())
        });
    }
}