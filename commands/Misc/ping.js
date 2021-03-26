const Discord = require("discord.js");
module.exports = {
	name: 'ping',
	execute(message, args) {
		message.channel.send('do you feel accomplished? are you proud of yourself for finding this? clap clap clap.')
	},
};