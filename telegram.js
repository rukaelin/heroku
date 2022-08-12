module.exports = {
    sendMessage: function (message) {
        const axios = require('axios');
        try {
            axios
                .post('https://api.telegram.org/bot' + process.env.TELEGRAM_TOKEN + '/sendMessage',
                    {
                        chat_id: process.env.TELEGRAM_CHAT_ID,
                        text: message
                    })
                .then(res => {
                    console.log(`statusCode: ${res.status}`);
                    console.log(res);
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (err) {
            console.error(err);
            res.send('Error ' + err);
        }
    }
}