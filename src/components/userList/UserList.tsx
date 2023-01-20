import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useAction";
import {useDispatch} from "react-redux";
import {UserActionTypes} from "../../types/userReducerTypes";


const UserList: FC = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const {fetchUsers} = useActions();
    const {loading, users, error} = useTypedSelector(state => state.user)
    console.log(users)


    useEffect(() => {
        fetchUsers()//! Непонятный баг с типами РЕШЕНО
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    const inputHandler = (event: any) => {
        setPage(event.target.value);
    }

    return (
        <div>
            <div>page
                <input value={page} onInput={(e) => inputHandler(e)} type="number"/>
            </div>
            <button onClick={() =>fetchUsers(page)}>загрузить</button>
            {users.map(user => (<div key={user.id}>{user.name}
                <button onClick={() =>dispatch({type: UserActionTypes.DELETE_USER, payload: user.id})}>delete</button></div>))}
        </div>
    );
};

export default UserList;
