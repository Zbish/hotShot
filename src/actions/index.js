import { ADD_NEW_LEAGUE,
        ADD_PLAYER_TO_NEW_LEAGUE,
        ADD_GAME_TO_NEW_LEAGUE,
        CHANGE_NAME_OF_NEW_LEAGUE,
        SET_CURRENT_LEAGUE,
        Change_Bet,
        Change_Game_Score
      } from './actionNames';

export function addNewLeague() {
  return {
    type: ADD_NEW_LEAGUE,
  };
}
export function addPlayerToNewLeague(player) {
  return {
    type: ADD_PLAYER_TO_NEW_LEAGUE,
    player
  };
}
export function addGameToNewLeague(game) {
  return {
    type: ADD_GAME_TO_NEW_LEAGUE,
    game
  };
}
export function changeNameOfNewLeague(name) {
  return {
    type: CHANGE_NAME_OF_NEW_LEAGUE,
    name
  };
}

export function setCurrentLeague(name) {
  return {
    type: SET_CURRENT_LEAGUE,
    name
  };
}

export function chengeBet(newBet) {
  return {
    type: Change_Bet,
    newBet
  };
}

export function changeGameScore(newScore) {
  return {
    type: Change_Game_Score,
    newScore
  };
}
