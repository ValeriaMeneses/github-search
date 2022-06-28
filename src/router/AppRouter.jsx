import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages';
import { GithubRouter } from './GithubRouter';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<GithubRouter />} />
            </Routes>
        </>
    )
}
