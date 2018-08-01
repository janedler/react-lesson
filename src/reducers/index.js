/**
 * Created by janedler on 2018/7/31.
 */

import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'



const todoApp = combineReducers({
    todos,visibilityFilter
})

export default todoApp