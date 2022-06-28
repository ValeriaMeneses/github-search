import { Routes, Route } from 'react-router-dom';

import { Navbar } from "../components/Navbar"
import { UsersPage, RepositoriesPage, HomePage } from '../pages';


export const GithubRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/users" element={ <UsersPage /> } />
                <Route path="/repositories" element={ <RepositoriesPage /> } />
            </Routes>
        </>
    )
}
