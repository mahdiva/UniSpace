import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Course";
import Navigation from "./component/Navigation";
// import {Router} from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from "./pages/Calendar";
import Course from "./pages/Course";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sticky from 'react-stickynode';

function App() {
    return (
        <>
            <Router>
                <Sticky>
                <Navigation /></Sticky>
                <Switch>
                    <Route path='/home' exact component={Dashboard} />
                    <Route path='/course' exact component={Course} />
                    <Route path='/calendar' exact component={Calendar} />
                </Switch>
            </Router>
            </>
    );
}

export default App;
