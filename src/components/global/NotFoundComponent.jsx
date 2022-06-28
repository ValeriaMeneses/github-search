import PropTypes from 'prop-types';

export const NotFoundComponent = ({ text }) => {
    return (
        <div className="NotFoundComponent--container text-center mt-5 pt-5">
            <img src="src/assets/github-logo-transparent.png" />
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