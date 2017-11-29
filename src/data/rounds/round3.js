export default [
  //------round 3
  {
    team2: 'A1',
    team1: 'A4',
    match: 33,
    group: 'A',
    date: 'June 25 2018 17:00',
    stadium: 'Samara Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'A3',
    team1: 'A2',
    match: 34,
    group: 'A',
    date: 'June 25 2018 17:00',
    stadium: 'Volgograd Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'B1',
    team1: 'B4',
    match: 35,
    group: 'B',
    date: 'June 25 2018 21:00',
    stadium: ' Mordovia Arena (Saransk)',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'B3',
    team1: 'B2',
    match: 36,
    group: 'B',
    date: 'June 25 2018 21:00',
    stadium: 'Kaliningrad',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'C1',
    team1: 'C4',
    match: 37,
    group: 'c',
    date: 'June 26 2018 17:00',
    stadium: 'Luzhniki(Moscow)',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'C3',
    team1: 'C2',
    match: 38,
    group: 'c',
    date: 'June 26 2018 17:00',
    stadium: 'Fisht(Sochi)',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'D1',
    team1: 'D4',
    match: 39,
    group: 'D',
    date: 'June 26 2018 21:00',
    stadium: 'Saint Petersburg',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'D3',
    team1: 'D2',
    match: 40,
    group: 'D',
    date: 'June 26 2018 21:00',
    stadium: 'Rostov Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'E1',
    team1: 'E4',
    match: 41,
    group: 'E',
    date: 'June 27 2018 21:00',
    stadium: 'Spartak(Moscow)',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'E3',
    team1: 'E2',
    match: 42,
    group: 'E',
    date: 'June 27 2018 21:00',
    stadium: 'Nizhny Novgorod ',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'F1',
    team1: 'F4',
    match: 43,
    group: 'F',
    date: 'June 27 2018 17:00',
    stadium: 'Kazan Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'F3',
    team1: 'F2',
    match: 44,
    group: 'F',
    date: 'June 27 2018 17:00',
    stadium: 'Ekateringburg Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'G1',
    team1: 'G4',
    match: 45,
    group: 'G',
    date: 'June 28 2018 21:00',
    stadium: 'Kaliningrad Stadium',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'G3',
    team1: 'G2',
    match: 46,
    group: 'G',
    date: 'June 28 2018 21:00',
    stadium: 'Mordovia Arena (Saransk)',
    score: {
      team2: 0,
      team1: 0
    }
  },

  {
    team2: 'H1',
    team1: 'H4',
    match: 47,
    group: 'H',
    date: 'June 28 2018 17:00',
    stadium: 'Volgograd Arena',
    score: {
      team2: 0,
      team1: 0
    }
  },
  {
    team2: 'H3',
    team1: 'H2',
    match: 48,
    group: 'H',
    date: 'June 28 2018 17:00',
    stadium: 'Samara Arena',
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