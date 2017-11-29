import { ADD_LIGA } from '../actions/actionNames';
import { leagues } from '../data/index';

export default function ligaReducer(state = {leagues}, action) {
  switch (action.type) {
      case ADD_LIGA:
      return{
        ...state,
        leagues: [...leagues, action.league],
      };
    default:
      return state;
  }
}

