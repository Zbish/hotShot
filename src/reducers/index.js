// reducers/index.js

import { combineReducers } from 'redux'
import leagues from './leagues'
import games from './games'
import friends from './friends'
import team from './team'
import gamesSchedule from'./gamesSchedule'

export default {
  leagues,
  games,
  friends,
  team,
  gamesSchedule
}