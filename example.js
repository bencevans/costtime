const costtime = require('./')
const hourlyRate = 50
const timeSpent = '12h42m'

let charge = costtime(hourlyRate, timeSpent)

console.log('£' + charge)
