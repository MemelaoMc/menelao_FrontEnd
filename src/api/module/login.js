import httpClient from '../httpClient';
require('dotenv').config();

const login = async (data) => {
  return await httpClient.post(`${process.env.REACT_APP_API_HOST}/user/login`, data, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
};

export {
  login
};