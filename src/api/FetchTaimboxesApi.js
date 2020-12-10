import makeRequest from './makeFetchRequest';


const BASE_URL = "http://localhost:4000/timeboxes";



//utworzony modół
const FetchTimeboxesApi = {
    getAllTimeboxes: async function(accessToken){
        console.log({accessToken})
        const response = await makeRequest(BASE_URL,"GET", null , accessToken);
    //    const response = await window.fetch("http://localhost:4000/timeboxes");
    //     if (!response.ok) {
    //         throw new Error('something went wrong!')
    //     }
       const timeboxes = await response.json();
        return timeboxes;
    },

    addTimebox: async function(timeboxToAdd, accessToken){

        const response = await makeRequest(BASE_URL,"POST", timeboxToAdd, accessToken );
        // const response = await window.fetch("http://localhost:4000/timeboxes", {
        //     method:"POST",
        //     headers: {
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify(timeboxToAdd)
        // });
        // if (!response.ok) {
        //     throw new Error('something went wrong!')
        // }
        
        const addedTimebox = await response.json();
        return addedTimebox;   
    },
    
    replaceTimebox: async function(timeboxToReplace, accessToken) {
        if (!timeboxToReplace.id) {
            throw new Error('Timebox has to have an id to be updated')
        }

        const response = await makeRequest(`${BASE_URL}/${timeboxToReplace.id}`,"PUT", timeboxToReplace, accessToken )   
            const replaceTimebox = await response.json();
            return replaceTimebox;   
            
        },
    

        


    // Stary Zapis Funkcji
    // replaceTimebox: async function(timeboxToReplace) {
    //     if (!timeboxToReplace.id) {
    //         throw new Error('Timebox has to have an id to be updated')
    //     }

    //         const response = await window.fetch(`http://localhost:4000/timeboxes/${timeboxToReplace.id}`, {
    //         method:"PUT",
    //         headers: {
    //             "Content-Type":"application/json"
    //         },
    //         body: JSON.stringify(timeboxToReplace)
    //     });
    //     if (!response.ok) {
    //         throw new Error('something went wrong!')
    //     }
        
    //     const replaceTimebox = await response.json();
    //     return replaceTimebox;   
        
        

    // },
    

    removeTimebox: async function(timeboxToRemove, accessToken) {
        if (!timeboxToRemove.id) {
            console.log(timeboxToRemove)
            throw new Error('Timebox has to have an id to be deleted')
        }
        await makeRequest(`${BASE_URL}/${timeboxToRemove.id}`,"DELETE", timeboxToRemove, accessToken )
        
    },

    // Full-text searchAdd q GET /posts?q=internet -> dokumentacja json-server
    getTimeboxesByFullTextSearch: async function (searchQuery, accessToken) {
        const response = await makeRequest(`${BASE_URL}/?q=${searchQuery}`, "GET",null,  accessToken);
        const timeboxes = await response.json();
        console.log(timeboxes)
        return timeboxes;
    },
}
 

export default FetchTimeboxesApi;


