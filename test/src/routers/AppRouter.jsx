import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { CarScreen } from "../components/car/CarScreen";
import { TableCarsScreen } from "../components/table/TableCarsScreen";
import { Navbar } from "../NavBar";

export const AppRouter = () => {

    
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={TableCarsScreen} />
                    <Route exact path='/car' component={CarScreen} />
                </Switch>
            </div>
        </Router >
    )
}
