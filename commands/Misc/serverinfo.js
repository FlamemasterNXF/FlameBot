module.exports = {
	name: 'serverinfo',
	execute(message, args) {
        message.channel.send(`This server is called ${message.guild.name}! Wow!\nThis server has a whopping total of ${message.guild.memberCount} members!`)

	},
};