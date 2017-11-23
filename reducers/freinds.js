// reducers/freinds.js
import { ADD_PERSON, DELETE_PERSON } from '../constants';

const initialState = { freinds: [
                                    {name:'gil',points:70,code:1},
                                    {name:'dor',points:50,code:2},
                                    {name:'omri',points:60,code:3},
                                    {name:'azran',points:30,code:4},
                                    {name:'nizan',points:5,code:5}
                                ] }

export default function freindsReducer(state = initialState, action) {
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
