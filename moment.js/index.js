// const moment = require('moment')
// console.log(moment(1571628604386).format('YYYY-MM-DD hh:mm:ss'));
// console.log(moment.duration(60).minutes());
// console.log(moment.duration(1571628604386).hours());
// console.log(moment.duration(1571628604386).years());
import {
  msFormat
}
from './momentUtil.js';
const res = msFormat(1571628604386, 'YYYY-MM-DD hh:mm:ss.SSS');
console.log(res);