export const compareDates = (date1, date2) => {
  var d1 = new Date(date1)
  var d2 = new Date(date2)
  if (d1.getDate() === d2.getDate()) {
    console.log('abig')
  } else {
    console.log('small')
  }
}