import axios from 'axios'
import { getRefreshToken,isAccesssTokenExpired,setAuthUser } from './auth'
import { API_BASE_URL } from './constants'
import Cookies from 'js-cookie'

//const useAxios=()=>{
//     const refresh_Token=Cookies.get('refresh_token')
//     const access_token=Cookies.get('access_token')

//     const axiosInstance=axios.create({
//         baseURL:API_BASE_URL,
//         headers:{Authorization:`Bearer ${access_token}`}
//     });
//     axiosInstance.interceptors.request.use(async(req)=>{
//         if(!isAccesssTokenExpired){
//             return req;
//         }
//         const response=await getRefreshToken(refresh_Token)
//         setAuthUser(response.access,response.refresh)
//         req.headers.Authorization=`Bearer ${response.data?.access}`;
//         return req;
//     });
//     return axiosInstance
// }




// const access_token = Cookies.get("access_token");

//   const axiosInstance = axios.create({
//     baseURL: API_BASE_URL,
//     headers: { Authorization: `Bearer ${access_token}` },
//   });

//   axiosInstance.interceptors.request.use(async (req) => {
//     const token = Cookies.get("access_token");

//     // ✅ Check if the token is expired
//     if (isAccesssTokenExpired(token)) {
//       try {
//         const response = await getRefreshToken();
//         setAuthUser(response.access, response.refresh);
//         req.headers.Authorization = `Bearer ${response.access}`;
//       } catch (err) {
//         console.error("Token refresh failed:", err);
//       }
//     }

//     return req;
//   });

//   return axiosInstance;
// };

// export default useAxios


const useAxios = () => {
  const access_token = Cookies.get("access_token");

  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: { Authorization: `Bearer ${access_token}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const token = Cookies.get("access_token");

    if (isAccesssTokenExpired(token)) {
      try {
        // ✅ Make sure getRefreshToken uses the API base URL
        const response = await axios.post(`${API_BASE_URL}user/token/refresh/`, {
          refresh: Cookies.get("refresh_token"),
        });

        setAuthUser(response.data.access, response.data.refresh);
        req.headers.Authorization = `Bearer ${response.data.access}`;
      } catch (err) {
        console.error("Token refresh failed:", err);
      }
    }

    return req;
  });

  return axiosInstance;
};

export default useAxios;



