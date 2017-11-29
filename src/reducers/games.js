import {rounds} from '../data'

export default function gamesReducer(state = {rounds: rounds}, action) {
  switch (action.type) {
    default:
      return state;
  }
}
