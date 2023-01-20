import {TodoAction, TodoActionTypes, TodoState} from "../../types/todoReducerTypes";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
};


export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return {...state, loading: true, error: null};
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            // return {...state, todos: [...state.todos, ...action.payload.filter(item => state.todos.findIndex(todo => todo.id === item.id) < 0)], loading: false, error: null};
            return {...state, todos: [...action.payload], loading: false, error: null};
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {...state, error: action.payload, loading: false};
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload};
        case TodoActionTypes.SET_LIMIT:
            return {...state, limit: action.payload};
        default:
            return state;
    }
}