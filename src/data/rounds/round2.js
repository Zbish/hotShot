export default [
  //------round 2
  {
    team2: 'A3',
    team1: 'A1',
    match: 17,
    group: 'A',
    date: 'June 19 2018 21:00',
    stadium: 'Saint Petersburg',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'A2',
    team1: 'A4',
    match: 18,
    group: 'A',
    date: 'June 20 2018 18:00',
    stadium: ' Rostov Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'B3',
    team1: 'B1',
    match: 19,
    group: 'B',
    date: 'June 20 2018 15:00',
    stadium: ' Luzhniki(Moscow)',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'B2',
    team1: 'B4',
    match: 20,
    group: 'B',
    date: 'June 20 2018 21:00',
    stadium: 'Kazan Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'C3',
    team1: 'C1',
    match: 21,
    group: 'c',
    date: 'June 21 2018 15:00',
    stadium: 'Ekateringburg Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'C2',
    team1: 'C4',
    match: 22,
    group: 'c',
    date: 'June 21 2018 18:00',
    stadium: 'Samara Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'D3',
    team1: 'D1',
    match: 23,
    group: 'D',
    date: 'June 21 2018 21:00',
    stadium: ' Nizhny Novgorod',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'D2',
    team1: 'D4',
    match: 24,
    group: 'D',
    date: 'June 22 2018 18:00',
    stadium: 'Volgograd Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'E3',
    team1: 'E1',
    match: 25,
    group: 'E',
    date: 'June 22 2018 15:00',
    stadium: 'Saint Petersburg',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'E2',
    team1: 'E4',
    match: 26,
    group: 'E',
    date: 'June 22 2018 21:00',
    stadium: 'Kaliningrad',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'F3',
    team1: 'F1',
    match: 27,
    group: 'F',
    date: 'June 23 2018 18:00',
    stadium: ' Fisht(Sochi)',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'F2',
    team1: 'F4',
    match: 28,
    group: 'F',
    date: 'June 23 2018 21:00',
    stadium: 'Rostov Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'G3',
    team1: 'G1',
    match: 29,
    group: 'G',
    date: 'June 23 2018 15:00',
    stadium: 'Spartak(Moscow)',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'G2',
    team1: 'G4',
    match: 30,
    group: 'G',
    date: 'June 24 2018 15:00',
    stadium: ' Nizhny Novgorod',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'H3',
    team1: 'H1',
    match: 31,
    group: 'H',
    date: 'June 24 2018 21:00',
    stadium: 'Kazan Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'H2',
    team1: 'H4',
    match: 32,
    group: 'H',
    date: 'June 24 2018 18:00',
    stadium: ' Ekateringburg Arena',
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