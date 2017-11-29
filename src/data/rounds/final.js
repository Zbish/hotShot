export default [
  //------Final
  {
    team2: 'Loser-62',
    team1: 'Loser-61',
    match: 63,
    group: 'thirdPlace',
    date: 'July 14 2018 17:00',
    stadium: 'Saint Petersburg',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'Winner-62',
    team1: 'Winner-61',
    match: 64,
    group: 'Final',
    date: 'July 15 2018 18:00',
    stadium: 'Luzhniki(Moscow)',
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