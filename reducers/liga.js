// reducers/liga.js
import { ADD_PERSON, DELETE_PERSON } from '../constants';

const initialState = { liga: [{name: 'Mondiel'},{Players:"12"},{Games:'10/25'},{Leading:'dor rabba in 5 points'}] }

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
