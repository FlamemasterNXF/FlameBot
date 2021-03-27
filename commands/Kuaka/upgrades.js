const Discord = require("discord.js");
const kuakaEmote = "<:kuakacoin:763799806337613834>"
module.exports = {
    name: 'upgrades',
    execute(message, args) {
        let kuakaEmbed = new Discord.MessageEmbed()
            .setColor('#bd11ff')
            .setTitle(`${kuakaEmote} Upgrades`)
            .setDescription(`**this is a upgrade**\nCosts 69 ${kuakaEmote}\n*does something!*\n\n**the real**\nCosts 2 ${kuakaEmote}\n*baanan*\n\n**photo**\nCosts ok ${kuakaEmote}\n*graph*\n\n`)
            .setTimestamp()
            .setFooter(`Make sure to invest in Kuakacoin using .invest!`, 'https://cdn.discordapp.com/emojis/763799806337613834.png?v=1');
        message.channel.send(kuakaEmbed)
    },
};