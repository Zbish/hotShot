// reducers/allGames.js
import { ADD_PERSON, DELETE_PERSON } from '../constants';

const initialState = { allGames: [
                                  {home:'A1',away:'A2',code:1,
                                    score:{home:0,away:0},
                                       },
                                  {home:'A3',away:'A4',code:2,
                                    score:{home:0,away:0},
                                      },
                                      {home:'B1',away:'B2',code:3,
                                      score:{home:0,away:0},
                                         },
                                    {home:'B3',away:'B4',code:4,
                                      score:{home:0,away:0},
                                        },
                                  ] }

export default function allGamesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return {
        people: [...state.people, action.person],
      };
    case DELETE_PERSON:
      return {
        people: state.people.filter(p => p.name !== action.person.name),
      };
    default:
      return state;
  }
}
