import axios from 'axios';

const AdminService = {
    getRecords: async () => {
        const response = await axios.get('/api/admin/records');
        return response.data;
    },
    addRecord: async (record) => {
        await axios.post('/api/admin/records', record);
    },
    deleteRecord: async (id) => {
        await axios.delete(`/api/admin/records/${id}`);
    },
    getEnrollmentData: async () => {
        const response = await axios.get('/api/admin/enrollment-data');
        return response.data;
    }
};

export default AdminService;
