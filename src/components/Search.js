import React, { useState } from 'react';
import StudentService from '../services/StudentService';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const students = await StudentService.searchStudents(query);
        setResults(students);
    };

    return (
        <div>
            <h2>Search Students</h2>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by name, department, or year" />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map(student => (
                    <li key={student.id}>{student.name} - {student.department}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
