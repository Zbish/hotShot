// reducers/liga.js
import { ADD_LIGA } from '../actions/actionNames';

const initialState = { liga: [{name:'Mondial',
                               players:[
                                        {name:'gil',points:0,code:2},
                                        {name:'dor',points:0,code:1},
                                        {name:'omri',points:0,code:3},
                                        {name:'azran',points:0,code:4},
                                        {name:'nizan',points:0,code:5}
                                      ],

                                      games:[
                                         {team2:'A2',team1:'A1',match:1,group:'A',bats:[{playerCode:1,team2:0,team1:0},
                                                                                        {playerCode:2,team2:1,team1:1},
                                                                                        {playerCode:3,team2:1,team1:0},
                                                                                        {playerCode:4,team2:0,team1:0},
                                                                                        {playerCode:5,team2:0,team1:0}],
                                         Date:'June 14 2018 18:00',stadium:'LuzhnikiStadium(Moscow)',score:{team2:0,team1:0}
                                            },
                                            {team2:'A4',team1:'A3',match:2,group:'A',bats:[{playerCode:1,team2:2,team1:1},
                                                                                            {playerCode:2,team2:3,team1:1},
                                                                                            {playerCode:3,team2:2,team1:1},
                                                                                            {playerCode:4,team2:3,team1:1},
                                                                                            {playerCode:5,team2:3,team1:1}],
                                            Date:'June 15 2018 15:50',stadium:'Ekaterinburg Arena',score:{team2:2,team1:1}
                                               },

                                               {team2:'B2',team1:'B1',match:3,group:'B',bats:[{playerCode:1,team2:5,team1:5},
                                                                                              {playerCode:2,team2:0,team1:0},
                                                                                              {playerCode:3,team2:5,team1:5},
                                                                                              {playerCode:4,team2:1,team1:1},
                                                                                              {playerCode:5,team2:3,team1:3}],
                                               Date:'June 16 2018 21:00',stadium:'Saint Petersburg Stadium',score:{team2:5,team1:5}
                                                  },
                                                  {team2:'B4',team1:'B3',match:4,group:'B',bats:[{playerCode:1,team2:1,team1:2},
                                                                                                  {playerCode:2,team2:1,team1:3},
                                                                                                  {playerCode:3,team2:2,team1:3},
                                                                                                  {playerCode:4,team2:1,team1:3},
                                                                                                  {playerCode:5,team2:0,team1:3}],
                                                  Date:'June 15 2018 18:00',stadium:'Fisht Stadium (Sochi)',score:{team2:1,team1:2}
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
