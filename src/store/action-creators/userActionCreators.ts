import {UserAction, UserActionTypes} from "../../types/userReducerTypes";
import {Dispatch} from "react";
import axios from "axios";

export const fetchUsers = (page: number = 1) => {
    return async function (dispatch: Dispatch<UserAction>) {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
                params: {_page: page, _limit: 2}
            })
            setTimeout(() => {   // имитация нагруженного запроса
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: "Произошла ошибка при загрузке"});
        }
    }
}
