import {UserAction, UserActionTypes, UserState} from "../../types/userReducerTypes";


const initialState = {
    users: [],
    loading: false,
    error: null,
};


export const userReducer = (state: UserState  = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {users: [], error: null, loading: true}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {users: action.payload, error: null, loading: false}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {users: [], error: action.payload, loading: false}
        default: return state
    }
}