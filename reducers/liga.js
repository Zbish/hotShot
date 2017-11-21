// reducers/liga.js
import { ADD_PERSON, DELETE_PERSON } from '../constants';

const initialState = { liga: [{name:'mondial',
                               players:[{name:'dor'},{name:'gil'},{name:'omri'},{name:'azran'},{name:'nizan'}],
                               games:[{team1:'Maccabi Haifa',team2:'Maccabi Tel Aviv'},{team1:'juventus',team2:'hapoel Marmorek'},{team1:'Barcelona',team2:'Arsenal'}],
                            }] }
// {name: 'Mondial'},{Players:"12"},{Games:'10/25'},{Leading:'dor rabba in 5 points'}
export default function ligaReducer(state = initialState, action) {
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
