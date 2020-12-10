import axios from 'axios';

const BASE_URL = "http://localhost:4000";


//utworzony modół
const AxiosAuthentication = {
    

    login: async function(credentials){
        const response = await axios.post(`${BASE_URL}/login`, credentials);
        const result = response.data;
        console.log(result)
        return result;   
    },
    
    
        
   
    
}
 

export default AxiosAuthentication;