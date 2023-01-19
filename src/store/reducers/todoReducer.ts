import {TodoAction, TodoActionTypes, TodoState} from "../../types/todoReducerTypes";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null
};


export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return {todos: [...state.todos], loading: true, error: null};
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {todos: [...state.todos, ...action.payload], loading: false, error: null};
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {todos: [...state.todos], error: action.payload, loading: false}
        default:
            return state;
    }
}