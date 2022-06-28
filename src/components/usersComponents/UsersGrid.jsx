import { CardItemUser } from './CardItemUser';
import { ErrorComponent, NotFoundComponent } from '../global';

export const UsersGrid = ({ users, user }) => {

    return (
        <>
            {
                users && users.length > 0 ?
                <div className="d-flex flex-wrap justify-content-between">
                    {
                        users.map((item) =>(
                            <CardItemUser key={ item.id } { ...item } />
                        ))
                    }
                </div> :
                users && users.error ?
                <ErrorComponent
                    error={ users.error.response.status }
                /> :
                users && user !== '' && users.length === 0 &&
                <NotFoundComponent
                    text="Usuario no encontrado"
                />
            }
        </>
    )
}
