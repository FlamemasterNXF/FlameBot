const Discord = require("discord.js");
module.exports = {
    name: 'update',
    execute(message, args) {
        let changelogEmbed = new Discord.MessageEmbed()
            .setColor('#919191')
            .setTitle('Update 0.31')
            .setDescription(`Discord Game Update!\n\n-Removed Kuakacoin stuff\n-Added .predict`)
            .setTimestamp()
            .setFooter('Thanks for reading this!', 'https://cdn.discordapp.com/emojis/551903543515152437.png?v=1');
        message.channel.send(changelogEmbed)
    },
};