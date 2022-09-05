module.exports = {
    sendMessage: function (message) {
        const axios = require('axios');
        try {
            const truncatedMessage = message.substring(0, 200);
            module.exports.doSendMessage(process.env.TELEGRAM_CHAT_ID, truncatedMessage, 'Ruben');
            module.exports.doSendMessage(process.env.TELEGRAM_CHAT_ID_SARAH, truncatedMessage, 'Sarah');
        } catch (err) {
            console.error(err);
        }
    },
    doSendMessage: function (telegramChatId, message, recipient) {
        const axios = require('axios');
        axios
            .post('https://api.telegram.org/bot' + process.env.TELEGRAM_TOKEN + '/sendMessage',
                {
                    chat_id: telegramChatId,
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