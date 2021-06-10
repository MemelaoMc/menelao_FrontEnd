import httpClient from '../httpClient';

const post = async (data) => {
  return await httpClient.post(`${process.env.REACT_APP_API_HOST}/accounts/`, data);
};

const getAll = async () => {
  return await httpClient.get(`${process.env.REACT_APP_API_HOST}/accounts`);
};

const get = async (id) => {
  return await httpClient.get(`${process.env.REACT_APP_API_HOST}/accounts/${id}`);
};

const put = async (id, data) => {
  return await httpClient.put(`${process.env.REACT_APP_API_HOST}/accounts/${id}/`, data);
};

const filter = async (query) => {
  return await httpClient.get(`${process.env.REACT_APP_API_HOST}/accounts${query}`);
};

export {
  post,
  getAll,
  get,
  put,
  filter,
};
