const Discord = require("discord.js");
module.exports = {
    name: 'buyupgrade',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`Please Provide a Upgrade to buy!`);
        }
        let upgradeNames = []
        upgradeNames[0] = "Kuakacoin Maximum"
        upgradeNames[1] = "Kuakacoin Minimum"

        if(!args.has(upgradeNames[0]|upgradeNames[1])){
            return message.channel.send(`That is not a valid Upgrade!`)
        }
        else
            message.channel.send(`if upgrades were finished this would buy one`)
    },
};