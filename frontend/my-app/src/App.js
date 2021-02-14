import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Course";
import Navigation from "./component/Navigation";
// import {Router} from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from "./pages/Calendar";


function App() {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/home' exact component={Dashboard} />
                    <Route path='/courses' exact component={Courses} />
                    <Route path='/calendar' exact component={Calendar} />
                </Switch>
            </Router>
            </>
    );
}

export default App;
