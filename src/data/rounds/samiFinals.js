export default [
  //------Sami Finals
  {
    team2: 'Winner-58',
    team1: 'Winner-57',
    match: 61,
    group: 'samiFinals',
    date: 'July 10 2018 21:00',
    stadium: 'Nizhny Novgorod',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'Winner-60',
    team1: 'Winner-59',
    match: 62,
    group: 'samiFinals',
    date: 'July 11 2018 21:00',
    stadium: 'Kazan Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },

].map(item => {
  return {
    ...item,
    date: new Date(item.date).getTime()
  }
})