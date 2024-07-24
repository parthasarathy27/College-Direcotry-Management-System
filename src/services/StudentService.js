import axios from 'axios';

const StudentService = {
    searchStudents: async (query) => {
        const response = await axios.get(`/api/students/search?query=${query}`);
        return response.data;
    },
    getAdvisors: async () => {
        const response = await axios.get('/api/students/advisors');
        return response.data;
    }
};

export default StudentService;
