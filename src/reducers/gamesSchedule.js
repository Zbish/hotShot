// reducers/gamesSchedule.js
import { rounds } from '../data/index';

export default (state, action) => {
  switch(action.type) {
   
    default:
    return state || {
        rounds:rounds
    };
  }
}
