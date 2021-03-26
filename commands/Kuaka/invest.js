const Discord = require("discord.js");
let membersInvested = player.membersInvested
global.player = {membersInvested}
module.exports = {
    name: 'invest',
    execute(message, args) {
        message.channel.send('Thanks for investing in Kuakacoin! You are officially swag!')
        membersInvested += 1;
        global.player = {membersInvested}
    },
};