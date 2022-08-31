module.exports = {
    sendMessage: function (message) {
        const axios = require('axios');
        try {
            const truncatedMessage = message.substring(0, 200);
            axios
                .post('https://api.telegram.org/bot' + process.env.TELEGRAM_TOKEN + '/sendMessage',
                    {
                        chat_id: process.env.TELEGRAM_CHAT_ID,
                        text: truncatedMessage
                    })
                .then(res => {
                    console.log(`message sent: ${truncatedMessage}`);
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (err) {
            console.error(err);
        }
    }
}