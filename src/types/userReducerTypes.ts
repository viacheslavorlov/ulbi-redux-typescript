
export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
    DELETE_USER = "DELETE_USER"

}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}

interface DeleteUser {
    type: UserActionTypes.DELETE_USER;
    payload: number
}


export interface UserState {
    users: any[]
    loading: boolean
    error: null | string
}


export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | DeleteUser;
