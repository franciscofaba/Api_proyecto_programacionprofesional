import axios from 'axios';
import Cookies from 'js-cookie';

// Crear una instancia de axios
const axiosInstance = axios.create();

// Agregar un interceptor para incluir el token en cada solicitud
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');
    console.log('token:', token)
    if (token) {
      config.headers['Authorization'] = `${token}`;
    } else {
      console.log('No token found in cookies');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;