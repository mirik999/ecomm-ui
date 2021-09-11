import axios from 'axios';

const withAxios = axios.create({
  baseURL: 'http://localhost:4004',
});

// Add a response interceptor
withAxios.interceptors.response.use(
  function (response) {
    if (response.data.errors && response.data.errors[0].extensions?.exception?.status === 401) {
      console.log('Unauthorized');
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default withAxios;
