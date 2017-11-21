// reducers/liga.js
import { ADD_PERSON, DELETE_PERSON } from '../constants';

const initialState = { liga: [{name:'Mondial',
                               players:[{name:'dor',points:70},{name:'gil',points:50},{name:'omri',points:60},{name:'azran',points:30},{name:'nizan',points:5}],
                               games:{name:'house 5',date:'sunday 25/7/18',game:"20",games:[{home:'Maccabi Haifa',away:'Maccabi Tel Aviv',score:{home: 5,away: 0},icon:{home:'../images/maccabiHaifa.png',away:'../images/macabiTelAviv.jpg'}},
                               {home:'juventus',away:'hapoel Marmorek',score:{home: 15,away: 3},icon:{home:'../images/maccabiHaifa.png',away:'../images/macabiTelAviv.jpg'}},
                               {home:'Barcelona',away:'Arsenal',score:{home:7,away:2},icon:{home:'../images/maccabiHaifa.png',away:'../images/macabiTelAviv.jpg'}}]},
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
