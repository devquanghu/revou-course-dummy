import { Button, Card } from '../../components';
import UserDetail from './UserDetail';
import { User, AppContext } from '../../providers/ContextProvider';
import { useContext } from 'react';

const UserContainer = () => {

    const { setUser } = useContext(AppContext)

    const fetchUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data: User = await response.json();

        setUser?.(data)
    };

    return (
        <Card border>
             <UserDetail />

             <Button label={'ambil user'} onClick={() => fetchUser()}/>
        </Card>
    )
}

export default UserContainer