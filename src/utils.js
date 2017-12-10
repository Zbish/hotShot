import _ from 'lodash';

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
  const hit = score.team1 == guess.team1 &&
              guess.team2 == score.team2
  const hit2 = score.team1 == score.team2 &&
               guess.team1 == guess.team2
  const hit3 = score.team1 > score.team2 &&
               guess.team1 > guess.team2
  const hit4 = score.team1 < score.team2 &&
               guess.team1 < guess.team2
  var points = hit ? 3 :
               hit2 ? 1 :
               hit3 ? 1 :
                hit4 ? 1 : 0
  return points
}
export const changeScore = function(state,newScore){
  var clone = _.cloneDeep(state);
  var gameIndex = _.findIndex(clone.rounds[0], function(l) { return l.match == newScore.newScore.match; })
 
if(newScore.newScore.team == 1)
  {
    var game = clone.rounds[0]
    game[gameIndex].score.team1 += newScore.newScore.score
  }
else{
  var game = clone.rounds[0]
  game[gameIndex].score.team2 += newScore.newScore.score
}
  
return clone
}


export const changeBet = function(state,newBet){
  var clone = _.cloneDeep(state);
  var newBet = newBet.newBet
  var leagueIndex = _.findIndex(clone.leagues, function(l) { return l.name == newBet.leagueName; })
  var gamesIndex = _.findIndex(clone.leagues[leagueIndex].games, function(l) { return l.gameNumber == newBet.match; })
  var bet = _.findIndex(clone.leagues[leagueIndex].games[gamesIndex].bets, function(l) { return l.playerCode == newBet.playerCode; })
 
  var team1Score = {
    playerCode: newBet.playerCode,
    guess: {
      team2: 0,
      team1: newBet.value.bet
    }
  }
  var team2Score  = {
    playerCode: newBet.playerCode,
    guess: {
      team2: newBet.value.bet,
      team1: 0
    }
  }
  if(bet == -1)
    {
     var player = newBet.value.team == 1 ? team1Score :
                                           team2Score
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

export const imageBorder = function(value){
  var color = value == 1 ? 'gold' :
              value == 2 ? 'silver' : '#665D1E'
    var size = value == 1 ? 110 :
               value == 2 ? 100 : 95
  return{     
  borderColor: color,
  width:size,
  height:size,
    }
}