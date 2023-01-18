import React, {Dispatch, FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchUsers} from "../../store/action-creators/actionCreators";
import {useDispatch} from "react-redux";
import {UserAction} from "../../types/userReducerTypes";


const UserList: FC = () => {
    const dispatch: Dispatch<UserAction> = useDispatch()
    const {loading, users, error} = useTypedSelector(state => state.user)
    console.log(users)
    const getUsers = ()=>  dispatch(fetchUsers())

    useEffect(() => {
        getUsers()
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user => (<div key={user.id}>{user.name}</div>))}
        </div>
    );
};

export default UserList;
