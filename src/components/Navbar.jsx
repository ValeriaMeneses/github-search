import { Link, NavLink } from 'react-router-dom';
import GithubImage from '../assets/github-mark-32px.png';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                    <img src={ GithubImage } width="30" height="30" className="d-inline-block align-top mr-2" alt="Github"/>
                    GitHubSearch
                </Link>
                <a 
                    href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsignup%3Fref_cta%3DSign%2Bup%26ref_loc%3Dheader%2Blogged%2Bout%26ref_page%3D%252F%26source%3Dheader-home" 
                    className="btn gs-btn-outline-purple ml-auto order-lg-3" 
                    role="button" 
                    aria-pressed="true"
                >
                    Sign in
                </a>
                <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav gs-navbar">
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                            to="/users"
                        >
                            Buscar Usuario
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                            to="/repositories"
                        >
                            Buscar Repositorio
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}
