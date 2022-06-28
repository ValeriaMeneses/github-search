import { useState } from 'react';

import { getRepos } from '../helpers/getRepos';
import { InputSearch } from '../components/global';
import { RepositoriesGrid } from '../components/repositoriesComponents/RepositoriesGrid';

export const RepositoriesPage = () => {

    const [ repo, setRepositorie ] = useState('');
    const [ repositories, setRepositoriesList ] = useState([]);

    const onChangeRepo = (newRepo) => {
        setRepositorie(newRepo);
        getAllRepositories();
    }

    const getAllRepositories = async() => {
        const newRepositories = await getRepos(repo);

        if (repo !== '') {
            setRepositoriesList(newRepositories);
        }
    }

    return (
        <div className="container">
            <InputSearch
                placeholder="Buscar repositorio"
                name="searchRepo"
                onChangeInput={ (value) => onChangeRepo(value) }
            />
            <RepositoriesGrid
                repo={ repo }
                repositories={ repositories }
            />
        </div>
    )
}
