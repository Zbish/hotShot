import _ from 'lodash'
import { ADD_NEW_LEAGUE,
        ADD_PLAYER_TO_NEW_LEAGUE,
        ADD_GAME_TO_NEW_LEAGUE,
        CHANGE_NAME_OF_NEW_LEAGUE,
        SET_CURRENT_LEAGUE } from '../actions/actionNames';
import { leagues } from '../data/index';

const createNewLeague = () => {
  return {
    name: '',
    players: [],
    games: []
  }
}

export default (state, action) => {
  switch (action.type) {
      case ADD_NEW_LEAGUE:
      return{
        ...state,
        leagues: [...leagues, state.newLeague],
        newLeague: createNewLeague()
      };
      break;
      case ADD_PLAYER_TO_NEW_LEAGUE:
        return{
          ...state,
          newLeague: {
            ...state.newLeague,
            players: [...state.newLeague.players, action.player]
          }
        }
        break;
        case ADD_GAME_TO_NEW_LEAGUE:
          return{
            ...state,
            newLeague: {
              ...state.newLeague,
              games: [...state.newLeague.games, action.game]
            }
          }
          break;
        case CHANGE_NAME_OF_NEW_LEAGUE:
          return{
            ...state,
            newLeague: {
              ...state.newLeague,
              name: action.name
            }
          }
          break;
        case SET_CURRENT_LEAGUE:
          return{
            ...state,
            currentLeague: _.find(state.leagues, {name: action.name})
          }
          break;
      default:
        return state || {
          leagues: leagues,
          newLeague: createNewLeague(),
        };
  }
}

