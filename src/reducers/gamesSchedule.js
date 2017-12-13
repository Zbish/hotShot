// reducers/gamesSchedule.js
import { rounds } from '../data/index';
import {Change_Game_Score} from '../actions/actionNames'
import {changeScore} from '../utils'


export default (state, action) => {
  console.log('rounds' , rounds)
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
        rounds:rounds
    };
  }
}
