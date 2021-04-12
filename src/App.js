import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
    return (
        <>
            <CssBaseline />
            <Switch>
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contacts" component={Contacts} />
                <Route exact path="/" component={Home} />
            </Switch>
        </>
    );
}

export default App;
