// reducers/allGames.js
import { ADD_PERSON, DELETE_PERSON } from '../constants';
import round1 from '../reducers/Rounds/Round1'
import round2 from '../reducers/Rounds/Round2'
import round3 from '../reducers/Rounds/Round3'

const initialState = { allGames: [round1.round1,round2.round2,round3.round3] }
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
