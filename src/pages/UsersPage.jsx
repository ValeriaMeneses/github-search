import { useState } from 'react';

import { InputSearch } from '../components/global';
import { getUsers } from '../helpers/getUsers';
import { UsersGrid } from '../components/usersComponents/UsersGrid';

export const UsersPage = () => {

    const [ user, setUser ] = useState('');
    const [ usersList, setUsersList ] = useState([]);

    const onChangeUser = (newUser) => {
        setUser(newUser);
        getAllUsers();
    }

    const getAllUsers = async() => {
        const newUsers = await getUsers(user);

        if (user !== '') {
            setUsersList(newUsers);
        }
    }

    return (
        <div className="container">
            <InputSearch
                placeholder="Buscar usuario"
                name="searchUser"
                onChangeInput={ (value) => onChangeUser(value)}
            />
            <UsersGrid 
                users={ usersList } 
                user={ user }
            />
        </div>
    )
}
