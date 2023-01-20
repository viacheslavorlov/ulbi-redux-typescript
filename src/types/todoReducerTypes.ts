
export enum TodoActionTypes {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE",
    SET_LIMIT = "SET_LIMIT"
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

interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number
}
interface SetLimit {
    type: TodoActionTypes.SET_LIMIT;
    payload: number
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
    page: number
    limit: number
}


export type TodoAction = FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction | SetTodoPage | SetLimit;
