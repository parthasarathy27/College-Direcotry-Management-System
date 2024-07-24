import React, { useEffect, useState } from 'react';
import FacultyService from '../services/FacultyService';

const ManageClass = () => {
    const [classList, setClassList] = useState([]);

    useEffect(() => {
        FacultyService.getClassList().then(data => setClassList(data));
    }, []);

    return (
        <div>
            <h2>Manage Class List</h2>
            <ul>
                {classList.map(student => (
                    <li key={student.id}>
                        {student.name} - <a href={`mailto:${student.email}`}>{student.email}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageClass;
