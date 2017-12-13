// reducers/gamesSchedule.js
import { rounds, final,samiFinals,quarterFinals,roundOf16 } from '../data/index';
import {Change_Game_Score} from '../actions/actionNames'
import {changeScore} from '../utils'


export default (state, action) => {
  switch(action.type) {
    case Change_Game_Score:
    const newState = changeScore(state,action)
    return{
      ...state,
      ...newState
    };
    break;
    default:
    return state || {
        rounds:rounds,
        roundOf16:roundOf16,
        quarterFinals:quarterFinals,
        samiFinals:samiFinals,
        final:final,
    };
  }
}
