import axios from 'axios';

const UserService = {
    getProfile: async () => {
        const response = await axios.get('/api/user/profile');
        return response.data;
    }
};

export default UserService;
