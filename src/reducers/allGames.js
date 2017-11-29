// reducers/allGames.js
import round1 from '../data/rounds/round1'
import round2 from '../data/rounds/round2'
import round3 from '../data/rounds/round3'

const initialState = { allGames: [round1.round1,round2.round2,round3.round3] }
export default function allGamesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
