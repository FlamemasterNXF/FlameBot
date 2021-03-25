const Discord = require("discord.js");
let membersInvested = 0
global.player = {membersInvested}
module.exports = {
    name: 'invest',
    execute(message, args) {
        message.channel.send('Thanks for investing in Kuakacoin! You are offically swag!')
        membersInvested += 1;
        global.player = {membersInvested}
    },
};