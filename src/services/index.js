import { Axios } from "axios";
import { auth } from "../config/FirebaseConfig";

const baseUrl = 'http://localhost:8080';

export const axiosInstance = new Axios({
    baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    validateStatus: (status)=> status >= 200 && status < 300,
});

axiosInstance.interceptors.request.use(async (config) => {
    const accessToken = await auth?.currentUser?.getIdToken();
    const tokenType = "Bearer";
    if(accessToken && config.headers){
        config.headers.Authorization = `${tokenType} ${accessToken}`;
    }
    config.data = JSON.stringify(config.data);
    return config;
})


const responseInterceptor = async (config) => {
    try {
      config.data =
        typeof config.data === 'string' ? JSON.parse(config.data) : config.data;
      return config;
    } catch (e) {
      return config;
    }
  };
  
  axiosInstance.interceptors.response.use(responseInterceptor);