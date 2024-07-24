import React from 'react';
import ManageRecords from './ManageRecords';
import DashboardGraphs from './DashboardGraphs';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Administrator Dashboard</h2>
            <ManageRecords />
            <DashboardGraphs />
        </div>
    );
};

export default AdminDashboard;
