import { NavLink } from 'react-router-dom';
import AstroMona from '../assets/astro-mona.webp';
import AstroMonaFooter from '../assets/footer-illustration.webp';
import GitHubLogo from '../assets/github-mark-32px.png';

export const HomePage = () => {
    return (
        <div className="h-100 w-100 position-absolute">
            <nav className="navbar navbar-light justify-content-center">
                <a className="navbar-brand" href="#">
                    <img src={ GitHubLogo } width="30" height="30" className="d-inline-block align-top mr-2" alt="Github"/>
                    GitHubSearch
                </a>
            </nav>
            <div className="HomePage--cotainer container d-flex justify-content-center align-items-center flex-column">
                <h2 className="HomePage--title text-center text-uppercase gs-font-weight-super">Buscador GitHub</h2>
                <h4 className="HomePage--title text-center font-weight-normal">Encuentra el usuario o repositorio deseado</h4>
                <NavLink 
                    className="btn HomePage--btn mt-4"
                    to="/users"
                >
                    Buscar Usuario
                </NavLink>
                <NavLink 
                    className="btn HomePage--btn mt-3"
                    to="/repositories"
                >
                    Buscar Repositorio
                </NavLink>
            </div>
            <div className="HomePage--img">
                <img src={ AstroMona } alt="astro mona" className="d-md-none" />
                <img src={ AstroMonaFooter }  alt="GitHub image" width="100%" className="d-none d-md-block"/>
            </div>
        </div>
    )
}
