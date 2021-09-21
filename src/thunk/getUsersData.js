import {GET_DATA_SUCCESS} from "../store/actions";

export function getUsersData() {
    return async (dispatch) => {
        try {
            const users = await fetch('https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json')
            const data = await users.json()
            dispatch({type: GET_DATA_SUCCESS, users: data});
        } catch (error) {
            console.error(error);
        }
    };
}