const Discord = require("discord.js");
module.exports = {
    name: 'update',
    execute(message, args) {
        let changelogEmbed = new Discord.MessageEmbed()
            .setColor('#919191')
            .setTitle('Major Update 0.14')
            .setDescription(`--MAJOR UPDATE--\n\n-THE BOT HAS HOSTING NOW! It will be on 24/7 for the foreseeable future!\n\n-Added Saving with help from unpinga! You can Invest as much as you want and never lose your data!\n\n-Added ;invest, which allows you to invest into Kuakacoin, boosting its value!`)
            .setTimestamp()
            .setFooter('Thanks for reading this!', 'https://cdn.discordapp.com/emojis/551903543515152437.png?v=1');
        message.channel.send(changelogEmbed)
    },
};