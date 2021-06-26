const Discord = require("discord.js");
const kuakaEmote = "<:kuakacoin:763799806337613834>"
module.exports = {
    name: 'help',
    execute(message, args) {
        let helpEmbed = new Discord.MessageEmbed()
            .setColor('#00bf49')
            .setTitle('Command List')
            .setDescription(`**=Moderation=**\n\n-Kick: Kicks a member from your server, duh.\n\n-Ban: The best command.\n\n-Warn: Warns a member.\n\n**=Misc=**\n\n-Update: Brings up the Changelog from the latest Update.\n\n-Server Info: Shows some basic infromation about your server. [VERY OLD AND OUTDATED, USE NOT RECOMMENDED]`)
            .setTimestamp()
            .setFooter('Try using the .ping secret', 'https://cdn.discordapp.com/emojis/701943264743391355.png?v=1');
        message.channel.send(helpEmbed)
    },
};