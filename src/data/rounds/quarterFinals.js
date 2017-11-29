export default [
  //------quarter Finals
  {
    team2: 'Winner-50',
    team1: 'Winner-49',
    match: 57,
    group: 'quarterFinals',
    date: 'July 6 2018 17:00',
    stadium: 'Nizhny Novgorod',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'Winner-54',
    team1: 'Winner-53',
    match: 58,
    group: 'quarterFinals',
    date: 'July 6 2018 21:00',
    stadium: 'Kazan Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'Winner-52',
    team1: 'Winner-51',
    match: 59,
    group: 'quarterFinals',
    date: 'July 7 2018 21:00',
    stadium: 'Samara Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'Winner-56',
    team1: 'Winner-55',
    match: 60,
    group: 'quarterFinals',
    date: 'July 7 2018 17:00',
    stadium: 'Fisht Stadium, Sochi',
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