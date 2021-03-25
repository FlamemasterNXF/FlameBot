const Discord = require("discord.js");
module.exports = {
    name: 'update',
    execute(message, args) {
        let changelogEmbed = new Discord.MessageEmbed()
            .setColor('#919191')
            .setTitle('Update 0.11')
            .setDescription(`Totally redid Kuakacoin!\n\n-Use ;value to see the current value of Kuakacoin!\n\n-Not much more to do with it, for now...`)
            .setTimestamp()
            .setFooter('Next Update: 0.12', 'https://cdn.discordapp.com/emojis/551903543515152437.png?v=1');
        message.channel.send(changelogEmbed)
    },
};