import _ from 'lodash';

export const compareDates = (date1, date2) => {
  var d1 = new Date(date1)
  var d2 = new Date(date2)
  if (d1.getDate() === d2.getDate()) {
    console.log('abig')
  } else {
    console.log('small')
  }
}

export const withoutTime = function (ticks) {
  const d = new Date(ticks);
  d.setHours(0, 0, 0, 0);
  return d;
}

export const getTimeOfDay = function(ticks) {
  const d = new Date(ticks);
  var h = d.getHours();
  var m = _.padEnd(d.getMinutes(), 2, '0');
  return `${h}:${m}`;
}