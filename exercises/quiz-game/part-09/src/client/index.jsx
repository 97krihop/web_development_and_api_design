import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Match from './match';
import NotFound from './not_found';
import Home from './home';
import Navbar from './navbar';
import Login from './login';
import SignUp from "./signup";

const App = () => {
    const [user, setUser] = useState(null);

    const fetchAndUpdateUser = async () => {
        const url = "/api/user";
        let response;
        try {
            response = await fetch(url, {
                method: "get"
            });
        } catch (err) {
            console.log("Failed to connect to server: " + err);
            return;
        }
        if (response.status === 401) {
            //that is ok
            setUser(null);
            return;
        }
        if (response.status === 200) {
            const payload = await response.json();
            setUser(payload);
        }
    };

    return (
        <BrowserRouter>
            <div>
                <Navbar user={user} setUser={setUser}/>
                <Switch>

                    <Route exact path="/match" render={props =>
                        <Match
                            {...props}
                            user={user}
                            setUser={setUser}
                            fetchAndUpdateUser={fetchAndUpdateUser}
                        />}/>
                    <Route exact path="/login" render={props =>
                        <Login
                            {...props}
                            fetchAndUpdateUser={fetchAndUpdateUser}
                        />}/>
                    <Route exact path="/signup" render={props =>
                        <SignUp
                            {...props}
                            fetchAndUpdateUser={fetchAndUpdateUser}
                        />}/>
                    <Route exact path="/" render={props =>
                        <Home
                            {...props}
                            user={user}
                            fetchAndUpdateUser={fetchAndUpdateUser}
                        />}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
