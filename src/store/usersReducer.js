import {GET_DATA_SUCCESS} from "./actions";

const initialState = {
    users: null
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {...state, users: action.users}
        default:
            return state
    }
}