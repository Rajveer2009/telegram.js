const TelegramBot = require('node-telegram-bot-api');
const opt = { polling: true };
const token = "5682682532:AAEuq1ykiP2nkQAb2maamKwBWd_orCddvVE";
const bot = new TelegramBot(token, opt);

bot.onText(/\/whoami/, (msg) => {

    const chatId = msg.chat.id;
    const response = msg.chat.username;

    bot.sendMessage(chatId, response);
});