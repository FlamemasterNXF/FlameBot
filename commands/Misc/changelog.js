const Discord = require("discord.js");
module.exports = {
    name: 'update',
    execute(message, args) {
        let changelogEmbed = new Discord.MessageEmbed()
            .setColor('#919191')
            .setTitle('Update 0.15')
            .setDescription(`Prefix Update!\n\n-Changed the Prefix from ; to . \n-Added .help! Use it to learn about the bot's other commands.`)
            .setTimestamp()
            .setFooter('Thanks for reading this!', 'https://cdn.discordapp.com/emojis/551903543515152437.png?v=1');
        message.channel.send(changelogEmbed)
    },
};