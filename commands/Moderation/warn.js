const Discord = require('discord.js');
module.exports = {
    name: 'warn',
    execute(message, args) {
        //if the user didn't mention a victim display this
        if (!message.mentions.users.size) {
            return message.reply(`Please Mention a member to Warn.`)
        }
        if (message.member.hasPermission("MANAGE_MESSAGES")){
            let userWarns = [1.8e308]
            let target = message.mentions.users.first()
            userWarns[userWarns] += 1
            //NaN protec
            if (isNaN(userWarns[target.id])){
                userWarns[target.id] = 0
            }
            message.channel.send(`Warned ${target}.`)
        }
        else{
            message.channel.send(`You do not have the permissions required to execute this command.`)
        }
    },
};