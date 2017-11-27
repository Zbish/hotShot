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
                               
                                      games:[
                                         {team2:'A2',team1:'A1',match:1,group:'A',
                                         Date:'June 14 2018 18:00',stadium:'LuzhnikiStadium(Moscow)',score:{team2:0,team1:0}
                                            },
                                            {team2:'A4',team1:'A3',match:2,group:'A',
                                            Date:'June 15 2018 15:50',stadium:'Ekaterinburg Arena',score:{team2:0,team1:0}
                                               },
                                       
                                               {team2:'B2',team1:'B1',match:3,group:'B',
                                               Date:'June 16 2018 21:00',stadium:'Saint Petersburg Stadium',score:{team2:0,team1:0}
                                                  },
                                                  {team2:'B4',team1:'B3',match:4,group:'B',
                                                  Date:'June 15 2018 18:00',stadium:'Fisht Stadium (Sochi)',score:{team2:0,team1:0}
                                                     },]},
                            ] }
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
