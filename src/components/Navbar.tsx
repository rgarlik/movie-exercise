import { css } from '@emotion/css';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    // get the current location
    const location = useLocation();

    // style of the individual menu items
    const childStyle = css`
        width: 5rem;
        height: 5rem;
        text-align: center;
        vertical-align: middle;
        line-height: 5rem;
        transition: 0.2s background-color;
        text-decoration: none;
        color: black;

        &:hover {
            background-color: #e1e1e1;
            cursor: pointer;
        }
    `;
    return (
        <div
            className={css`
                height: 5rem;
                display: flex;
                background-color: #d0d0d0;
                margin-bottom: 2rem;
            `}>
            <Link
                className={css`
                    ${childStyle};
                    background-color: ${location.pathname == '/search' || location.pathname == '/'
                        ? '#7b7b7b'
                        : ''};
                `}
                to="/search">
                Search
            </Link>
            <Link
                className={css`
                    ${childStyle};
                    background-color: ${location.pathname == '/favorites' ? '#7b7b7b' : ''};
                `}
                to="/favorites">
                Favorites
            </Link>
        </div>
    );
}
