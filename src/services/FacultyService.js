import axios from 'axios';

const FacultyService = {
    getClassList: async () => {
        const response = await axios.get('/api/faculty/classlist');
        return response.data;
    },
    getProfile: async () => {
        const response = await axios.get('/api/faculty/profile');
        return response.data;
    },
    updateProfile: async (profile) => {
        await axios.put('/api/faculty/profile', profile);
    }
};

export default FacultyService;
