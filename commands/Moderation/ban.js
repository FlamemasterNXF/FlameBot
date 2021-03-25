const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    execute(message, args) {
        //if the user didn't mention a victim display this
        if (!message.mentions.users.size) {
            return message.reply(`Please Mention a member to Ban.`);
        }
        //main ban cmd
        //check if the user has Ban perms
        if (message.member.hasPermission("BAN_MEMBERS")) {
            //save the mentioned victim in a way to make it work with Ban()
            const target = message.mentions.users.first();
            const targetMember = message.guild.members.cache.get(target.id)
            //banning
            targetMember.ban()
            message.channel.send(`Banned ${target}`)
        }
        else{
            message.channel.send(`You do not have the permissions required to execute this command.`)
        }
    },
};