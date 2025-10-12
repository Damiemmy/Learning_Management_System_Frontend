import axios from 'axios'
import { getRefreshToken,isAccesssTokenExpired,setAuthUser } from './auth'
import { API_BASE_URL } from './constants'
import Cookies from 'js-cookie'

const useAxios=()=>{
    const refresh_Token=Cookies.get('refresh_token')
    const access_token=Cookies.get('access_token')

    const axiosInstance=axios.create({
        baseURL:API_BASE_URL,
        headers:{Authorization:`Bearer ${access_token}`}
    });
    axiosInstance.interceptors.request.use(async(req)=>{
        if(!isAccesssTokenExpired){
            return req;
        }
        const response=await getRefreshToken(refresh_Token)
        setAuthUser(response.access,response.refresh)
        req.headers.Authorization=`Bearer ${response.data?.access}`;
        return req;
    });
    return axiosInstance
}
export default useAxios