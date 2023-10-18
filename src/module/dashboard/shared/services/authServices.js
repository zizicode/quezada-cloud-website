import axios from 'axios';

const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post('http://localhost:3001/v1/login', { username, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;