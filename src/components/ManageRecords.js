import React, { useState, useEffect } from 'react';
import AdminService from '../services/AdminService';

const ManageRecords = () => {
    const [records, setRecords] = useState([]);
    const [newRecord, setNewRecord] = useState({});

    useEffect(() => {
        AdminService.getRecords().then(data => setRecords(data));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewRecord({
            ...newRecord,
            [name]: value
        });
    };

    const handleAdd = async () => {
        await AdminService.addRecord(newRecord);
        const updatedRecords = await AdminService.getRecords();
        setRecords(updatedRecords);
    };

    const handleDelete = async (id) => {
        await AdminService.deleteRecord(id);
        const updatedRecords = await AdminService.getRecords();
        setRecords(updatedRecords);
    };

    return (
        <div>
            <h2>Manage Student and Faculty Records</h2>
            <form onSubmit={e => e.preventDefault()}>
                {/* Input fields for new record */}
                <input type="text" name="name" onChange={handleChange} placeholder="Name" required />
                <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
                <input type="text" name="role" onChange={handleChange} placeholder="Role" required />
                <button onClick={handleAdd}>Add Record</button>
            </form>
            <ul>
                {records.map(record => (
                    <li key={record.id}>
                        {record.name} ({record.role}) - <a href={`mailto:${record.email}`}>{record.email}</a>
                        <button onClick={() => handleDelete(record.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageRecords;
