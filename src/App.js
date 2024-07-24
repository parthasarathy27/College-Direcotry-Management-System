import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/student" component={StudentDashboard} />
                <Route path="/faculty" component={FacultyDashboard} />
                <Route path="/admin" component={AdminDashboard} />
            </Switch>
        </Router>
    );
};

export default App;
