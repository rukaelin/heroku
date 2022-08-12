import { sendMessage } from './telegram';

export function setupSchedules() {
    const schedule = require('node-schedule');
    schedule.scheduleJob('*/1 * * * *', () => {
        sendMessage("it is currently " + Date.now().toString())
    });
}
