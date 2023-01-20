import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useAction";
import {TodoActionTypes} from "../../types/todoReducerTypes";
import {useDispatch} from "react-redux";


const TodoList: FC = () => {
    const dispatch = useDispatch();
    const {fetchTodos} = useActions();
    const {loading, todos, error, page, limit} = useTypedSelector(state => state.todo);
    const pages = [1, 2, 3, 4, 5, 6]
    useEffect(() => {
        fetchTodos(page, limit);
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <label htmlFor="page">Страница<input
                value={page}
                type="number"
                onChange={e => dispatch({type: TodoActionTypes.SET_TODO_PAGE, payload: e.target.value})}
                name="page"
                id="page"/></label>
            <label
                htmlFor="limit">Лимит<input
                type="number"
                value={limit}
                name="limit"
                id="limit"/></label>
            <button onClick={() => fetchTodos()}>Загрузить лист</button>
            <div style={{display: "flex"}}>
                {pages.map(page => <div onClick={() => fetchTodos(page, 10)} style={{border: 'solid 1px black', margin: '1em'}}>{page}</div>)}
            </div>
            {!error &&
				<ul>
                    {todos.map((todo, i) => (<li key={i}>{todo.id}. {todo.title}</li>))}
				</ul>}
        </div>
    );
};

export default TodoList;
