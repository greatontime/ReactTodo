var moment = require('moment');

console.log(moment().format())
var now = moment();
console.log('Current Time ',now.unix());

var timestamp = 1476290627;
var currentMoment = moment.unix(timestamp);
console.log(moment().format('MMM D, YY @ h:mm a'));
console.log(currentMoment.format('D/MM/YYYY @H:mm:ss'));
