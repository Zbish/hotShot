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
      g.bets = value.bets
      games.push(g)
    })
   return games
}

export const getRanking = function(games){
  var players = []
  _.forEach(games,function(p){
    _.forEach(p.bets,function(o){
      var playerPoints = {playerCode:o.playerCode,points:compareScore(p.score,o.guess)}
      var place = _.findIndex(players, function(l) { return l.playerCode == o.playerCode; })
      if(place == -1)
        {
          players.push(playerPoints)
        }
        else{
           players[place].points += playerPoints.points
        }
    } )
  })
  return players
}

export const compareScore = function(score,guess){
  var points = 0
     if(score.team1 == guess.team1 && guess.team2 == score.team2)
      {
        points = 3
        return points
      }
      else if(score.team1 == score.team2 && guess.team1 == guess.team2){
        points = 1
        return points
      }
      else if(score.team1 > score.team2 && guess.team1 > guess.team2){
        points = 1
        return points
      }else if(score.team1 < score.team2 && guess.team1 < guess.team2){
        points = 1
        return points
      }

  return points
}

export const changeBet = function(state,newBet){
  var clone = _.cloneDeep(state);
  var newBet = newBet.newBet
  var leagueIndex = _.findIndex(clone.leagues, function(l) { return l.name == newBet.leagueName; })
  var gamesIndex = _.findIndex(clone.leagues[leagueIndex].games, function(l) { return l.gameNumber == newBet.match; })
  var bet = _.findIndex(clone.leagues[leagueIndex].games[gamesIndex].bets, function(l) { return l.playerCode == newBet.playerCode; })
 
  if(bet == -1)
    {
      if(newBet.value.team == 1)
        {
          var player = {
            playerCode: newBet.playerCode,
            guess: {
              team2: 0,
              team1: newBet.value.bet
            }
          }
        }
      else{
        var player = {
          playerCode: newBet.playerCode,
          guess: {
            team2: newBet.value.bet,
            team1: 0
          }
        }
      }
     
      clone.leagues[leagueIndex].games[gamesIndex].bets.push(player)
      
    }
    else{
      if(newBet.value.team == 1)
        {
          clone.leagues[leagueIndex].games[gamesIndex].bets[bet].guess.team1 = newBet.value.bet
        }
        else{
          clone.leagues[leagueIndex].games[gamesIndex].bets[bet].guess.team2 = newBet.value.bet
        }
    }
  
  return clone
}

// ranking
export const sortArray = function(array)
{
  array.sort((a, b) => a.points < b.points) 
  return (array)
}
export const getLeaders  = function(array){
  leadersPlayers =[]   
  for(i=0 ; i < 3 ; i++)
    {
      if(array[i] == null)
        {
          return (leadersPlayers)
        }
        else{
          leadersPlayers.push(array[i]) 
        }
    }
  return (leadersPlayers)
}
export const getLosers = function(array){
  losers = []  
  for(i=3 ; i < array.length ; i++)
      {
         losers.push(array[i]) 
      }
      return(losers)
}

export const getIndex = function(code,array)
{
  var codes = _.findIndex(array, function(o) { return o.code == code; });
    return  codes
}