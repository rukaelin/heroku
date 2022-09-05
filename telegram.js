module.exports = {
    sendMessage: function (message) {
        const axios = require('axios');
        try {
            const truncatedMessage = message.substring(0, 200);
            module.exports.doSendMessage(truncatedMessage, 'Ruben');
            module.exports.doSendMessage(truncatedMessage, 'Sarah');
        } catch (err) {
            console.error(err);
        }
    },
    doSendMessage: function (message, recipient) {
        const axios = require('axios');
        axios
            .post('https://api.telegram.org/bot' + process.env.TELEGRAM_TOKEN + '/sendMessage',
                {
                    chat_id: recipient = 'Sarah' ? process.env.TELEGRAM_CHAT_ID_SARAH : process.env.TELEGRAM_CHAT_ID,
                    text: message
                })
            .then(res => {
                console.log(`message sent: ${message} to ${recipient}`);
            })
            .catch(error => {
                console.error(error);
            });
    }
}