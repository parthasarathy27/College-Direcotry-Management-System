import axios from 'axios';

const AuthService = {
    login: async (username, password, role) => {
        const response = await axios.post('/api/auth/login', { username, password, role });
        localStorage.setItem('user', JSON.stringify(response.data));
    },
    logout: () => {
        localStorage.removeItem('user');
    },
    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    }
};

export default AuthService;
