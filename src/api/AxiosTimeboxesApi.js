
import makeAxiosRequest from './makeAxiosRequest';

const BASE_URL = "http://localhost:4000/timeboxes";



//utworzony modół
const AxiosTimeboxesApi = {
    getAllTimeboxes: async function(accessToken){
        console.log({accessToken});
        
        // const response = await axios.get(BASE_URL,{headers:{Authorization: `Bearer ${accessToken}`}})
        const response = await makeAxiosRequest(BASE_URL,"GET",null ,accessToken);
        
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    console.log(response.config.headers.Authorization);
        
       const timeboxes = response.data;
        return timeboxes;
    },

    addTimebox: async function(timeboxToAdd, accessToken){
        
            const response = await makeAxiosRequest(BASE_URL,"POST",timeboxToAdd ,accessToken);
            console.log(response);

        const addedTimebox = response.data;
        return addedTimebox;   
    },
    
    replaceTimebox: async function(timeboxToReplace, accessToken) {
        if (!timeboxToReplace.id) {
            throw new Error('Timebox has to have an id to be updated')
        }
        console.log(timeboxToReplace)
        const response = await makeAxiosRequest(`${BASE_URL}/${timeboxToReplace.id}`,"PUT", timeboxToReplace, accessToken);
        console.log(response);

            const replaceTimebox = response.data;
            return replaceTimebox;   
         },
    

    removeTimebox: async function(timeboxToRemove, accessToken) {
        if (!timeboxToRemove.id) {
           throw new Error('Timebox has to have an id to be deleted')
        }
        const response = await makeAxiosRequest(`${BASE_URL}/${timeboxToRemove.id}`,"DELETE",null, accessToken);
        console.log(response);
        
    },

    // Full-text searchAdd q GET /posts?q=internet -> dokumentacja json-server
    getTimeboxesByFullTextSearch: async function (searchQuery, accessToken) {
        const response = await makeAxiosRequest(`${BASE_URL}/?q=${searchQuery}`,"GET",null, accessToken);
        const timeboxes = response.data;
        console.log(timeboxes)
        return timeboxes;
    },
}
 

export default AxiosTimeboxesApi;


//// POniżej próby z Axiosem



// const apiHost = "http://localhost:4200";
 
// export const api = Axios.create({
// baseURL: apiHost,
// headers: {
// Accept: "application/json",
// "Content-Type": "application/json"
// }
// });

// export const authenticationHeader = () => {
//     return {
//     Authorization: `Bearer ${Auth.getAccessToken()}`
//     };

//     export async function loginInTheApplication(login, password) {
//         return await api.post(`/login`, { email: login, password: password });
//         }
//         export async function refreshToken(refreshToken) {
//         return await api.post(`/refresh`, { refreshToken: `Bearer ${refreshToken}` });
//         }
//         export async function registerUsers(data) {
//         return await api.post(`/register`, data, { headers: authenticationHeader() });
//         }
//         export async function getUsersList() {
//         return await api.get(`/users`, { headers: authenticationHeader() });
//         }

//         export const getAccessToken = () => localStorage.getItem("accessToken");

// async function makeAxiosRequest(url, method, accessToken) {
    
//     const headers= {
//         "Content-Type":"application/json"
//     };
//     if (accessToken) {
//         headers["Authorization"] = `Bearer ${accessToken}`
//     }
//     const response = await axios.get(url, {
//     method,
//     headers,
    
    
//     });

// if (response.data!=='OK') {
//     throw new Error('something went wrong!')
//         }
    
//         return response;
// }  

// const axiosInstance = axios.create(accessToken,{
    
//     headers:{Authorization: `Bearer ${accessToken}`, "Content-Type":"application/json"},
//     method:"get",
//   });

//   axiosInstance.post('/api/signup', userObj)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e));


    