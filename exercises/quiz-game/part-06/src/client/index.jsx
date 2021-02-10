import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Match} from "./match";
import {NotFound} from "./not_found";
import {Home} from "./home";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/match" component={Match}/>
                    <Route exact path="/" component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
