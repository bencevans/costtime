const parseDuration = require('parse-duration')

function costtime (cost, time) {
 return cost * (parseDuration(time) / (60 * 60 * 1000))
}

module.exports = costtime

