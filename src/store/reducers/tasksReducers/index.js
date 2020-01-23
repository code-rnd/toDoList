import {ADD_TASK, REMOVE_TASK, UPDATE_TASK, SET_CURRENT_TASK} from '../../actions';
import {addTaskUtil, updateTaskUtil, removeTaskUtil} from "../../../utils/tasksCRUD";

const initialContent = [
    {
        id: 0,
        content: 'Настроить гитарный 🎸 гриф',
        process: 67,
        ready: false,
        isCurrentEdit: false
    },
    {
        id: 1,
        content: 'Продлить аренду спорт-кара 🏎️',
        process: 67,
        ready: true,
        isCurrentEdit: false
    },
    {
        id: 2,
        content: 'Написать письмо в Альпы 🧳. Альберту, касаемо винодельни',
        process: 67,
        ready: false,
        isCurrentEdit: false
    },
    {
        id: 3,
        content: 'Отогнать яхту 🚤 в соседний порт',
        process: 67,
        ready: false,
        isCurrentEdit: false
    }
]

export const initialState = {
    tasks: [...initialContent],
    currentTask: {}
}

export function defaultReducers(state = initialState, action) {

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