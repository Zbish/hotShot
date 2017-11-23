// reducers/allGames.js
import { ADD_PERSON, DELETE_PERSON } from '../constants';

const initialState = { allGames: [
                                  {home:'argentina',away:'brazil',code:1,
                                    score:{home:7,away:2},
                                       icon:{home:'../flags/argentina.jpg',away:'../flags/brazil.jpg'}},
                                  {home:'belgium',away:'colombia',code:2,
                                    score:{home:1,away:3},
                                       icon:{home:'../flags/Belgium.jpg',away:'../flags/colombia.jpg'}},
                                  {home:'france',away:'sweden',code:3,
                                    score:{home:3,away:1},
                                        icon:{home:'../flags/france.jpg',away:'../flags/sweden.jpg'}}
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
