import axios from "axios";

const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API
})
axiosInstance.interceptors.request.use(
    async function(config){
        const token = localStorage.getItem('token') || sessionStorage.getItem('token')
        if(token !== undefined && token !== null && token !== ''){
            config.headers['x-access-token'] = token
        }
        return config
    },
    function (err) {
        return Promise.reject(err);
      }
)
export default axiosInstance
