import PropTypes from 'prop-types';
import GithubLogo from '../../assets/github-logo-transparent.png';

export const NotFoundComponent = ({ text }) => {
    return (
        <div className="NotFoundComponent--container text-center mt-5 pt-5">
            <img src={ GithubLogo } alt="GitHub logo" />
            <h3 className="mt-4">{ text }</h3>
        </div>
    )
}

NotFoundComponent.propTypes = {
    text: PropTypes.string,
}

NotFoundComponent.defaultProps = {
    text: 'No se encuentra',
}