import {UserAction, UserActionTypes, UserState} from "../../types/userReducerTypes";


const initialState = {
    users: [],
    loading: false,
    error: null,
};


export const userReducer = (state: UserState  = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...state, error: null, loading: true}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {users: [...state.users, ...action.payload.filter(item => state.users.findIndex(user => user.id === item.id) < 0)], error: null, loading: false}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, error: action.payload, loading: false}
        case UserActionTypes.DELETE_USER:
            return {...state, users: state.users.filter(user => user.id !== action.payload), }
        default: return state
    }
}