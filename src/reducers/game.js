// reducers/game.js

const initialState = { game: [
                                {home:'A1',away:'A2',gameCode:1,
                                score:{home:0,away:0},
                                }
                                ] }

export default function friendsReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
