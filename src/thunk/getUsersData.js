import {GET_DATA_SUCCESS, GET_PAGES_SUCCESS} from "../store/actions";

const url = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'

export function getUsersData() {
    return async (dispatch) => {
        try {
            const users = await fetch(url)
            const data = await users.json()
            dispatch({type: GET_DATA_SUCCESS, users: data});
            dispatch({type: GET_PAGES_SUCCESS, pages: data.length});
        } catch (error) {
            console.error(error);
        }
    };
}