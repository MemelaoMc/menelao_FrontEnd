import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;

if (window.localStorage.token !== undefined) {
  axios.defaults.headers.common['Authorization'] = `${window.localStorage.token}`;
}

export default axios;