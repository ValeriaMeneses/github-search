import PropTypes from 'prop-types';

export const CardItemRepositorie = ({ avatar, name, description, url }) => {
    return (
        <div className="CardItemRepositorie--container d-flex p-2 rounded mb-4 flex-column align-items-center">
            <div className="CardItemRepositorie--img" >
                <img src={ avatar } alt={ name } className="rounded-circle" />
            </div>
            <div className="CardItemRepositorie--body" >
                <p className="mb-2 text-uppercase text-center mt-3 font-weight-bold">{ name }</p>
                <p className="mb-2">{ description }</p>
                <p className="mb-2 text-center">
                    <a href={ url } className="mb-2" target="_blank" >
                        <svg id="i-github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1rem" height="1rem">
                            <path strokeWidth="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
                        </svg>
                        <span className="mx-1">GitHub</span>
                        <svg id="i-external" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1rem" height="1rem" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                        </svg>
                    </a>
                </p>
            </div>
        </div>
    )
}

CardItemRepositorie.propTypes = {
    avatar: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
}

CardItemRepositorie.defaultProps = {
    avatar: "https://avatars.githubusercontent.com/u/69631?v=4",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    name: "facebook/react",
    url: "git://github.com/facebook/react.git",
}
