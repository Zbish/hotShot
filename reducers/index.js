// reducers/index.js

import { combineReducers } from 'redux'
import people from './people'
import liga from './liga'
import allGames from './allGames'
import freinds from './freinds'

const rootReducer = combineReducers({
    people,
    liga,
    allGames,
    freinds
})

export default rootReducer