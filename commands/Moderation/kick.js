const Discord = require('discord.js');
module.exports = {
	name: 'kick',
	execute(message, args) {
	    //if the user didn't mention a victim display this
        if (!message.mentions.users.size) {
            return message.reply(`Please Mention a member to Kick.`);
        }
        //main kick cmd
        //check if the user has Kick perms
        if (message.member.hasPermission("KICK_MEMBERS")) {
            //save the mentioned victim in a way to make it work with Kick()
            const target = message.mentions.users.first();
            const targetMember = message.guild.members.cache.get(target.id)
            //kicking
            targetMember.kick()
            message.channel.send(`Kicked ${target}`)
        }
        else{
            message.channel.send(`You do not have the permissions required to execute this command.`)
        }

        //check if the user has a higher role then the victim
        /*let userRole = message.member.ROLE.position;
        let victimRole = message.mentions.first.ROLE.position;
        if(!userRole > victimRole){
            message.channel.send(`You can't kick users with a role higher or equal too yours.`)
        }
        */
	},
};