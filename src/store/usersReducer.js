import {GET_DATA_SUCCESS, GET_PAGES_SUCCESS} from "./actions";

const initialState = {
    users: [],
    pages: null
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {...state, users: action.users}
        case GET_PAGES_SUCCESS:
            return {...state, pages: action.pages}
        default:
            return state
    }
}