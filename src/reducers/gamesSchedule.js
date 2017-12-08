// reducers/gamesSchedule.js
import { rounds } from '../data/index';
import {Change_Game_Score} from '../actions/actionNames'

export default (state, action) => {
  switch(action.type) {
    case Change_Game_Score:
    console.log('sabbabba',action)
    return{
      ...state,
     
    };
    break;
    default:
    return state || {
        rounds:rounds
    };
  }
}
