const Discord = require('discord.js')
module.exports = {
    name: 'mute',
    execute(message, args) {
        //if the user didn't mention a victim display this
        if (!message.mentions.users.size) {
            return message.reply(`Please Mention a member to Mute.`);
        }
        //main mute cmd
        //check if the user has Mute perms
        if (message.member.hasPermission("MANAGE_ROLES" && "MANAGE_MESSAGES")) {
            //save the mentioned victim
            let target = message.mentions.users.first()
            //mute
            const mutedRole = message.guild.roles.cache.get("813891058282266665")
            const member = message.mentions.members.first();
            if (!member.roles.cache.some(role => role.name === 'MUTED | PUNISHED')){
                member.roles.add(mutedRole);
                message.channel.send(`Muted ${target}`)
            }
            else {
                message.channel.send(`${target} is already Muted!`)
            }
        }
        else{
            message.channel.send(`You do not have the permissions required to execute this command.`)
        }
    },
};