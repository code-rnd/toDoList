export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const SET_CURRENT_TASK = "SET_CURRENT_TASK";

export const addTask = task => ({
    type: ADD_TASK,
    data: task
})

export const updateTask = task => ({
    type: UPDATE_TASK,
    data: task
})

export const removeTask = task => ({
    type: REMOVE_TASK,
    data: task
})

export const setCurrentTask = task => ({
    type: SET_CURRENT_TASK,
    data: task
})