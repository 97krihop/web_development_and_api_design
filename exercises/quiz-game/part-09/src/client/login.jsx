import React, {useState} from "react";
import {Link, useHistory,withRouter} from "react-router-dom";

function Login({fetchAndUpdateUser}) {
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const history = useHistory();

    const logIn = async () => {
        const url = "/api/login";
        const payload = {userId: userId, password: password};
        let response;

        try {
            response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
        } catch (err) {
            setError("Failed to connect to server: " + err);
            return;
        }

        if (response.status === 401) {
            setError("Invalid userId/password");
            return;
        }

        if (response.status !== 204) {
            setError("Error when connecting to server: status code " + response.status);
            return;
        }

        setError(null);
        await fetchAndUpdateUser();
        history.push("/");
    };

    return (<>
        <div className="login">
            <div>
                <p>User Id:</p>
                <input
                    type="text"
                    value={userId}
                    onChange={(event) => setUserId(event)}
                />
            </div>
            <div>
                <p>Password:</p>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event)}
                />
            </div>

            {error && <p>{error}</p>}

            <button className="button" onClick={logIn}>
                Log In
            </button>
            <Link className="button" tabIndex="0" to={"/signup"}>
                Register
            </Link>
        </div>
    </>)
}

export default withRouter(Login);