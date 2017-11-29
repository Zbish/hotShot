// reducers/index.js

import { combineReducers } from 'redux'
import liga from './liga'
import allGames from './allGames'
import friends from './friends'
import team from './team'
import game from './game'

export default {
  liga,
  allGames,
  friends,
  team,
  game
}