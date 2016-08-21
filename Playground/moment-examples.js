var moment = require('moment');

// console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now  = moment();
// console.log('timestamp', now.unix());
// 1471692012

var timestamp = 1471691944;
var currentMoment = moment.unix(timestamp);
// console.log('moment', currentMoment.format());
// 2016-08-20T12:19:04+01:00
// console.log('moment', currentMoment.format('MMM D, YY @ H.mm a'));
// Aug 20, 16 @ 12.19 pm

console.log('moment', currentMoment.format('MMMM Do, YYYY @ H.mm A'));
// August 20th, 2016 @ 12.19 PMdddd
