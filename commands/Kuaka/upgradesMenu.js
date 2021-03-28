const Discord = require("discord.js");
const kuakaEmote = "<:kuakacoin:763799806337613834>"
module.exports = {
    name: 'upgrades',
    execute(message, args) {
        let kuakaEmbed = new Discord.MessageEmbed()
            .setColor('#bd11ff')
            .setTitle(`${kuakaEmote} Upgrades **WIP**`)
            .setDescription(`**Kuakacoin Maximum**\nCosts 69 USD\n*Increases the Maximum Value of ${kuakaEmote}*\n\n**Kuakacoin Minimum**\nCosts 2 USD\n*Increases the Minimum Value of ${kuakaEmote}*\n\n**photo**\nCosts ok USD\n*graph*\n\n`)
            .setTimestamp()
            .setFooter(`Make sure to invest in Kuakacoin using .invest!`, 'https://cdn.discordapp.com/emojis/763799806337613834.png?v=1');
        message.channel.send(kuakaEmbed)
    },
};