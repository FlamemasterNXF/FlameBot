const Discord = require("discord.js");
let membersInvested = player.membersInvested
const kuakaEmote = "<:kuakacoin:763799806337613834>"
global.player = {
    membersInvested,
    kuakaEmote
}
module.exports = {
    name: 'invest',
    execute(message, args) {
        message.channel.send(`Thanks for investing in ${kuakaEmote}! You are officially swag!`)
        membersInvested += 1;
        global.player = {membersInvested}
    },
};