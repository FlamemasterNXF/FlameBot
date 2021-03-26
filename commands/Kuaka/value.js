const Discord = require('discord.js');
const kuakaEmote = "<:kuakacoin:763799806337613834>"
module.exports = {
    name: `value`,
    execute(message, args) {
        let kuakaValue = 0;
        let kuakaValuePrevious = 0;
        let kuakaCap = 10000 * (1.1 * player.membersInvested)
        let kuakaMinimum = 100 * (1.01 * player.membersInvested)
        kuakaValue = randomNumber(kuakaMinimum, kuakaCap)
        kuakaValuePrevious = kuakaValue;
        kuakaValue = randomNumber(kuakaMinimum, kuakaCap);
        let kuakaEmbed = new Discord.MessageEmbed()
            .setColor('#bd11ff')
            .setTitle(`Kuakacoin (${kuakaEmote})`)
            .setDescription(`${kuakaEmote} is currently valued at ${Notate(kuakaValue)} USD!\n\n${kuakaEmote} has been invested in ${player.membersInvested} times. This isn't enough, invest more!\nThe Investments into ${kuakaEmote} ensure the value never drops beneath ${Notate(kuakaMinimum)}!\nDue to Investments ${kuakaEmote} can reach a max value of ${Notate(kuakaCap)} USD!`)
            .setTimestamp()
            .setFooter(`Make sure to invest in Kuakacoin using .invest!`, 'https://cdn.discordapp.com/emojis/763799806337613834.png?v=1');
        message.channel.send(kuakaEmbed)
        function randomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }
        function Notate(x) {
            let exponent = Math.floor(Math.log10(Math.abs(x)));
            let mantissa = x / Math.pow(10, exponent);
            if(x >= 1e3)
                return `${mantissa.toFixed(2)}e${exponent}`
            else if(x < 1e3)
                return `${x.toFixed(2)}`;
            else if(x == 0)
                return '0';
        }
    },
};
