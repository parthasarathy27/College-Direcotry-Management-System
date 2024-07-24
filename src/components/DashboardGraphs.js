import React, { useEffect, useState } from 'react';
import AdminService from '../services/AdminService';
import { Line } from 'react-chartjs-2';

const DashboardGraphs = () => {
    const [enrollmentData, setEnrollmentData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await AdminService.getEnrollmentData();
            setEnrollmentData(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Enrollment Trends</h2>
            <Line data={enrollmentData} />
        </div>
    );
};

export default DashboardGraphs;
