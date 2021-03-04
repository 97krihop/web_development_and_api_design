import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h2>NOT FOUND: 404</h2>
            <p>ERROR: the page you requested in not available.</p>
            <Link to={'/'}>
                <button>home</button>
            </Link>
        </div>
    );
};
