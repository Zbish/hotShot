// reducers/index.js

import { combineReducers } from 'redux'
import people from './people'
import liga from './liga'
import allGames from './allGames'
import freinds from './freinds'
import team from './team'
import game from './game'

const rootReducer = combineReducers({
    people,
    liga,
    allGames,
    freinds,
    team,
    game
})

export default rootReducer