
export enum TodoActionTypes {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
}

interface FetchTodosAction {
    type: TodoActionTypes.FETCH_TODO;
}

interface FetchTodosSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS;
    payload: any[];
}
interface FetchTodosErrorAction {
    type: TodoActionTypes.FETCH_TODO_ERROR;
    payload: string
}

export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}


export interface TodoState {
    todos: Todo[]
    loading: boolean
    error: null | string
}


export type TodoAction = FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction;
