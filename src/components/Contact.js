import React, { useEffect, useState } from 'react';
import StudentService from '../services/StudentService';

const Contact = () => {
    const [advisors, setAdvisors] = useState([]);

    useEffect(() => {
        StudentService.getAdvisors().then(data => setAdvisors(data));
    }, []);

    return (
        <div>
            <h2>Contact Faculty Advisors</h2>
            <ul>
                {advisors.map(advisor => (
                    <li key={advisor.id}>
                        {advisor.name} - <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contact;
