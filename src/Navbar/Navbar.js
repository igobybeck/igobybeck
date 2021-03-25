import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <FontAwesomeIcon icon={faSnowflake} />
                        igobybeck
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;