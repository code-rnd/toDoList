import {combineReducers} from 'redux'
import {tasksReducers} from "./tasks";
import {processReducers} from './process';

export const reducers = combineReducers({
    'content': tasksReducers,
    'process': processReducers
})