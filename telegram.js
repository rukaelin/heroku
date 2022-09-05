module.exports = {
    sendMessage: function (message) {
        const axios = require('axios');
        try {
            const truncatedMessage = message.substring(0, 200);
            module.exports.doSendMessage(process.env.TELEGRAM_TOKEN, process.env.TELEGRAM_CHAT_ID, truncatedMessage);
            module.exports.doSendMessage(process.env.TELEGRAM_TOKEN, process.env.TELEGRAM_CHAT_ID_SARAH, truncatedMessage);
        } catch (err) {
            console.error(err);
        }
    },
    doSendMessage: function (telegramToken, telegramChatId, message) {
        const axios = require('axios');
        axios
            .post('https://api.telegram.org/bot' + telegramToken + '/sendMessage',
                {
                    chat_id: telegramChatId,
                    text: message
                })
            .then(res => {
                console.log(`message sent: ${truncatedMessage} to Ruben`);
            })
            .catch(error => {
                console.error(error);
            });
    }
}