import {GET_START_PROCESS} from "../../actions/process";

const initialState = {
    status: false
}

export function processReducers(state = initialState, action) {

    let newStatus = false;

    switch (action.type) {
        case GET_START_PROCESS:

            newStatus = action.data;

            return {
                ...state,
                ...{
                    status: newStatus
                }
            }

        default:
            return state

    }
}