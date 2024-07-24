import React from 'react';
import Profile from './Profile';
import Search from './Search';
import Contact from './Contact';

const StudentDashboard = () => {
    return (
        <div>
            <h2>Student Dashboard</h2>
            <Profile />
            <Search />
            <Contact />
        </div>
    );
};

export default StudentDashboard;
