import React from 'react';
import {Link,useHistory, withRouter} from "react-router-dom";

function Navbar({setUser, user}) {
    const history = useHistory();

    const logout = async () => {
        const url = "/api/logout";
        let response;
        try {
            response = await fetch(url, {method: "post"});
        } catch (err) {
            alert("Failed to connect to server: " + err);
            return;
        }

        if (response.status !== 204) {
            alert("Error when connecting to server: status code " + response.status);
            return;
        }
        setUser(null);
        history.push("/");
    };

    return (<div className="header">
        <Link to={"/"} tabIndex="0">
            Quiz
        </Link>
        {user?.id ? <>
            <p>Welcome {userId}</p>
            <button onClick={logout}>
                Logout
            </button>
        </> : <>
            <p>You are not logged in</p>
            <div>
                <Link to="/login" tabIndex="0">
                    LogIn
                </Link>
                {" "}
                <Link to="/signup" tabIndex="0">
                    SignUp
                </Link>
            </div>
        </>}
    </div>)
}

export default withRouter(Navbar);