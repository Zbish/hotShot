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

export const getLeagueGames = function(props){
    var schedule = props.gamesSchedule.rounds[0]
    var leagueGames = props.league.games
    var games = []
        _.forEach(leagueGames,function(value){
      var g = _.find(schedule,function(o){return o.match == value.gameNumber})
      games.push(g)
    })
   return games
}
