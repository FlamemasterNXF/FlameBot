//basic stuff
const fs = require('fs');
const Discord = require('discord.js');
const jQuery = require('jquery');
require("./save")
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
//getting the cmds from other files
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

//Statuses
const statuses = [
    "Now With Extra Flame",
    "Now With Extra...robotness???",
    "Taco Bell Simulator 2021",
    "Minecraft Education Edition",
    "With Your Sanity",
    "With Flame's Sanity",
    "Waffles Are Awesome",
    "Cmicken Nuggs",
    "WHY TF DOES ;KICK NOT WORK",
    "Flame Ban Simulator 2021",
    "PEN",
    "5 Hours",
    "This Bot Has Hosting Now!",
    "Help I Need Playing Statuses For My Discord Bot",
    "Warn Command Never >:)",
    "Mute and Kick are obsolete, Ban is the only good command!",
    "POWERED BY WEEBLY",
    "osu!",
    "we do a little trolling",
    "bacon",
    "aaaaajajabws!",
    "yomama.co.uk",
    "zoom",
    "siht etalsnart ot rehtob uoy did yhw",
    "picture"
]
//setting status, credit to void
let randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
setInterval(() => {
    randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setPresence({ activity: { name: `${randomStatus}` }, status: 'PLAYING' });
}, 10000);
//ready
client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({ activity: { name: 'A w a k e' }, status: 'PLAYING'})
});
//command stuff
client.on('message', message => {
    //check for cmd
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    //args 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    //cmds
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});
//login
client.login(token);