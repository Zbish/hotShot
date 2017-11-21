// reducers/index.js

import { combineReducers } from 'redux'
import people from './people'
import liga from './liga'

const rootReducer = combineReducers({
    people,
    liga
})

export default rootReducer