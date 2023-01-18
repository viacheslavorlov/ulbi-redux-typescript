import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useAction";


const UserList: FC = () => {
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

    return (
        <div>
            {users.map(user => (<div key={user.id}>{user.name}</div>))}
        </div>
    );
};

export default UserList;
