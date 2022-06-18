require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

const posAnswers = ['Callahan ascertains it.', 'Callahan has decided so!', 'With no doubt, and by Callahan\'s grace.', 'You may rely on it.', 'Callahan said so.', 'Most likely.', 'Emperor wills it.', 'Yes.', 'Callahan protects!', 'For the Warden Empire!'];
const netAnswers = ['Unknown, guardsman. Try asking again.', 'Ask again, but later.', 'I can\'t tell you now.', 'The future is unpredictable, but Callahan protects!', 'Focus on the task at hand! Ask me later.', 'It\'s better if you don\'t know.'];
const negAnswers = ['Silence, Colonial scum.', 'Absolutely not.', 'Don\'t even consider it.', 'That does not look good.', 'Doubtful at best, idiotic at worst.'];

client.on('message', msg => {
    if (msg.content[0] == '!') {
        switch (Math.floor(Math.random() * 3)) {
            case 0: {
                msg.reply(posAnswers[Math.floor(Math.random() * posAnswers.length)]);
                break;
            }
            case 1: {
                msg.reply(netAnswers[Math.floor(Math.random() * netAnswers.length)]);
                break;
            }
            case 2: {
                msg.reply(negAnswers[Math.floor(Math.random() * negAnswers.length)]);
                break;
            }
        }
    }
})

client.login(process.env.DISCORD_TOKEN);