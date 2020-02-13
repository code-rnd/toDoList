import {ADD_TASK, REMOVE_TASK, UPDATE_TASK, SET_CURRENT_TASK} from '../../actions/tasks';
import {addTaskUtil, updateTaskUtil, removeTaskUtil} from "../../../utils/tasksCRUD";

const initialContent = [
    {
        content: "Прогуляться по песчаному 🌊 берегу",
        id: 0,
        ready: false
    }
]

export const initialState = {
    tasks: [...initialContent],
    currentTask: {}
}

export function tasksReducers(state = initialState, action) {

    let tasks = [...state.tasks];
    let newTasks = [];
    let newTask = {};

    switch (action.type) {

        case ADD_TASK:
            newTask = action.data;

            newTasks = addTaskUtil(tasks, newTask);

            return {
                ...state,
                ...{
                    tasks: newTasks
                }
            }

        case UPDATE_TASK:
            newTask = action.data;

            newTasks = updateTaskUtil(tasks, newTask);

            return {
                ...state,
                ...{
                    tasks: newTasks
                }
            }

        case REMOVE_TASK:
            newTask = action.data;

            newTasks = removeTaskUtil(tasks, newTask);

            return {
                ...state,
                ...{
                    tasks: newTasks
                }
            }

        case SET_CURRENT_TASK:
            newTask = action.data;

            return {
                ...state,
                ...{
                    currentTask: newTask
                }
            }

        default:
            return state
    }
}