import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useTodoActions} from "../../hooks/useAction";


const TodoList: FC = () => {
    const {fetchTodos} = useTodoActions()
    const {loading, todos, error} = useTypedSelector(state => state.todo)

    useEffect(() => {
        fetchTodos()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <button onClick={() => fetchTodos()}>Загрузить лист</button>
            {!error &&
				<ul>
                    {todos.map((todo) => (<li key={todo.id}>{todo.title}</li>))}
				</ul>}
        </div>
    );
};

export default TodoList;
