//THE FORMULA
//(18,889,465,931,478,580,854,784×3×(refactor mult)×5×
// (1.25^upgrades bought)×1e38×1e10×(30^10)×((upgrades bought/2)^20)×(1e100^compacts))^(2^squarers)^1.1
const Discord = require("discord.js");
const Decimal = require('break_eternity.js')
module.exports = {
    name: 'predict',
    execute(message, args) {
        //credits to Acameda
        function exponentialFormat(num, precision, mantissa = true) {
            let e = num.log10().floor()
            let m = num.div(Decimal.pow(10, e))
            if (m.toStringWithDecimalPlaces(precision) == 10) {
                m = decimalOne
                e = e.add(1)
            }
            e = (e.gte(1e9) ? format(e, 3) : (e.gte(10000) ? commaFormat(e, 0) : e.toStringWithDecimalPlaces(0)))
            if (mantissa)
                return m.toStringWithDecimalPlaces(precision) + "e" + e
            else return "e" + e
        }
        function commaFormat(num, precision) {
            if (num === null || num === undefined) return "NaN"
            if (num.mag < 0.001) return (0).toFixed(precision)
            let init = num.toStringWithDecimalPlaces(precision)
            let portions = init.split(".")
            portions[0] = portions[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            if (portions.length == 1) return portions[0]
            return portions[0] + "." + portions[1]
        }
        function regularFormat(num, precision) {
            if (num === null || num === undefined) return "NaN"
            if (num.mag < 0.0001) return (0).toFixed(precision)
            if (num.mag < 0.1 && precision !==0) precision = Math.max(precision, 4)
            return num.toStringWithDecimalPlaces(precision)
        }
        function invertOOM(x){
            let e = x.log10().ceil()
            let m = x.div(Decimal.pow(10, e))
            e = e.neg()
            x = new Decimal(10).pow(e).times(m)

            return x
        }
        function format(decimal, precision = 2, small) {
            decimal = new Decimal(decimal)
            if (isNaN(decimal.sign) || isNaN(decimal.layer) || isNaN(decimal.mag)) {
                player.hasNaN = true;
                return "NaN"
            }
            if (decimal.sign < 0) return "-" + format(decimal.neg(), precision)
            if (decimal.mag == Number.POSITIVE_INFINITY) return "Infinity"
            if (decimal.gte("eeee1000")) {
                var slog = decimal.slog()
                if (slog.gte(1e6)) return "F" + format(slog.floor())
                else return Decimal.pow(10, slog.sub(slog.floor())).toStringWithDecimalPlaces(3) + "F" + commaFormat(slog.floor(), 0)
            }
            else if (decimal.gte("1e100000")) return exponentialFormat(decimal, 0, false)
            else if (decimal.gte("1e1000")) return exponentialFormat(decimal, 0)
            else if (decimal.gte(1e9)) return exponentialFormat(decimal, precision)
            else if (decimal.gte(1e3)) return commaFormat(decimal, 0)
            else if (decimal.gte(0.0001) || !small) return regularFormat(decimal, precision)
            else if (decimal.eq(0)) return (0).toFixed(precision)

            decimal = invertOOM(decimal)
            let val = ""
            if (decimal.lt("1e1000")){
                val = exponentialFormat(decimal, precision)
                return val.replace(/([^(?:e|F)]*)$/, '-$1')
            }
            else
                return format(decimal, precision) + "⁻¹"

        }
        let nextNum = new Decimal(18889465931478580854784).times(3).times(1e42).times(5).times(Decimal.pow(1.25, 48)).times(1e38).times(1e10).times(30).pow(10).times(Decimal.pow(24, 20)).times(Decimal.pow(1e100, 1)).pow(2).pow(3).pow(1.1)
        message.channel.send(`The next number is ${format(nextNum)}`)
        nextNum = nextNum.times(2)
    },
};