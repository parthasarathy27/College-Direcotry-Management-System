import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Student');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            await AuthService.login(username, password, role);
            // Redirect based on role
            if (role === 'Student') window.location.href = '/student';
            else if (role === 'Faculty Member') window.location.href = '/faculty';
            else window.location.href = '/admin';
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                <select value={role} onChange={e => setRole(e.target.value)}>
                    <option value="Student">Student</option>
                    <option value="Faculty Member">Faculty Member</option>
                    <option value="Administrator">Administrator</option>
                </select>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;
