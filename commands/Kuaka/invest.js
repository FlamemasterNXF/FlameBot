const Discord = require("discord.js");
let membersInvested = player.membersInvested
const kuakaEmote = "<:kuakacoin:763799806337613834>"
global.player = {
    membersInvested
}
module.exports = {
    name: 'invest',
    execute(message, args) {
        message.channel.send(`The Hivemind would like to inform you that after the next update ${kuakaEmote} will be totally redone, and it will be reset. This means all your Investments will be annihilated from reality, sorry.\n\nThanks for investing in ${kuakaEmote}! You are officially swag!`)
        membersInvested += 1;
        global.player = {membersInvested}
    },
};