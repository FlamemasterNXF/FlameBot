//THE FORMULA
//(18,889,465,931,478,580,854,784×3×(refactor mult)×5×
// (1.25^upgrades bought)×1e38×1e10×(30^10)×((upgrades bought/2)^20)×(1e100^compacts))^(2^squarers)^1.1
const Discord = require("discord.js");
const Decimal = require('break_eternity.js')
module.exports = {
    name: 'predict',
    execute(message, args) {
        let nextNum = new Decimal(18889465931478580854784).times(3).times(1e42).times(5).times(Decimal.pow(1.25, 48)).times(1e38).times(1e10).times(30).pow(10).times(Decimal.pow(24, 20)).times(Decimal.pow(1e100, 1)).pow(2).pow(3).pow(1.1)
        message.channel.send(`The next number is ${nextNum}`)
        nextNum = nextNum.times(2)
    },
};