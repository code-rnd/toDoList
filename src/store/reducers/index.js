import {combineReducers} from 'redux'
import {defaultReducers} from "./tasksReducers";

export const reducers = combineReducers({
    'content': defaultReducers
})