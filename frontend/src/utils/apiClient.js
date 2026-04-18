import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', // Update with your backend API URL
  withCredentials: true, // Include cookies in requests
});

export default apiClient;