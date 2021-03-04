import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Home({user, fetchAndUpdateUser}) {

    useEffect(() => {
        if (user) fetchAndUpdateUser();
    }, [])

    return (
        <div>
            <h1>hello welcome to quiz game</h1>
            {user ?
                <div>
                    <p>Victories: {user.victories}</p>
                    <p>Defeats: {user.defeats}</p>
                    <Link to={'/match'}>
                        <button>start game</button>
                    </Link>
                </div>
                : <p>You need to log-in to start playing!</p>
            }
        </div>
    );
}
