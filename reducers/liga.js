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
                                              {home:'A1',
                                              away:'A2',
                                              score:{home: 5,away: 0},
                                              },
                                                {home:'A3',
                                                away:'A4',
                                                score:{home: 15,away: 3},
                                               },
                                                  {home:'B1',
                                                  away:'B4',
                                                  score:{home:7,away:2},
                                                  }]},
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
