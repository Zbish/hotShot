// reducers/liga.js
import { ADD_LIGA } from '../constants';

const initialState = { liga: [{name:'Mondial',
                               players:[
                                        {name:'gil',points:70,code:1},
                                        {name:'dor',points:50,code:2},
                                        {name:'omri',points:60,code:3},
                                        {name:'azran',points:30,code:4},
                                        {name:'nizan',points:5,code:5}
                                      ],
                               games:{name:'house 5',
                                      date:'sunday 25/7/18',
                                      game:"20",
                                      games:[
                                              {home:'Maccabi Haifa',
                                              away:'Maccabi Tel Aviv',
                                              score:{home: 5,away: 0},
                                              icon:{home:'../images/maccabiHaifa.png',away:'../images/macabiTelAviv.jpg'}},
                                                {home:'juventus',
                                                away:'hapoel Marmorek',
                                                score:{home: 15,away: 3},
                                                icon:{home:'../images/maccabiHaifa.png',away:'../images/macabiTelAviv.jpg'}},
                                                  {home:'Barcelona',
                                                  away:'Arsenal',
                                                  score:{home:7,away:2},
                                                  icon:{home:'../images/maccabiHaifa.png',away:'../images/macabiTelAviv.jpg'}}]},
                            }] }
export default function ligaReducer(state = initialState, action) {
  switch (action.type) {
      case ADD_LIGA:
      return{
        liga: [...state.liga,
          action.name
          ],
      };
    default:
      return state;
  }
}
