import axios from 'axios';

async function makeAxiosRequest(url, method, data, accessToken) {
    // const options ={
    //     url:"http://localhost:4000/timeboxes",
    //     data:timeboxToAdd,
    //     headers:{Authorization: `Bearer ${accessToken}`, "Content-Type":"application/json"},
    //     method:"POST",
    //     }
    const headers= {
        "Content-Type":"application/json"
    };
    if (accessToken) {
        headers["Authorization"] = `Bearer ${accessToken}`
    }
const response = await axios({
    url,
    data,
    headers,
    method});
    
    console.log(response.statusText);
if (response.statusText!=="OK" && response.statusText!=="Created") {
    throw new Error('something went wrong!')
        }
    
        return response;
}

export default makeAxiosRequest;