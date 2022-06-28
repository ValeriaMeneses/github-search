import { CardItemRepositorie } from './CardItemRepositorie';
import { ErrorComponent, NotFoundComponent } from '../global';

export const RepositoriesGrid = ({ repo, repositories}) => {
    return (
        <>
            {
                repositories && repositories.length > 0 ?
                <div className="d-flex flex-wrap justify-content-between">
                    {
                        repositories.map((item) => ( 
                            <CardItemRepositorie key={ item.id } { ...item } /> 
                        ))
                    }
                </div> :
                repositories && repositories.error ?
                <ErrorComponent
                    error={ repositories.error.response.status }
                /> :
                repositories && repo !== '' && repositories.length === 0 &&
                <NotFoundComponent
                    text="Repositorio no encontrado"
                />
            }
        </>
    )
}
