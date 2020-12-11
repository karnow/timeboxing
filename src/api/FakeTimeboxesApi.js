import v4 from 'uuid/dist/esm-node/v4.js';

function wait (ms=1000) {
    return new Promise(
        (resolve) =>{
            setTimeout(resolve, ms)
        }
    )
}

const timeboxes = [
    { id:"a", title: "uczę się list", totalTimeInMinutes:25, isEdit:false},
    { id:"b", title: "uczę się formularzy", totalTimeInMinutes:15 ,isEdit:false},
    { id:"c", title: "uczę się komponentów niekontrolowanych", totalTimeInMinutes:5 ,isEdit:false}
]

function findIndexByAnId(id) {
    const result = timeboxes.findIndex((timebox)=> timebox.id == id)
    if (result <0) {
        throw new Error ('Timbox o podanym id nie istnieje');
    }
    return result;
}

//utworzony modół
const FakeTimeboxesApi = {
    getAllTimeboxes: async function(){
        await wait(200);
        console.log('GET all :', timeboxes)
        // throw new Error("Something went wrong");
        return [...timeboxes];
    },
    addTimebox: async function(timeboxToAdd){
        await wait(200);
        const addedTimebox={...timeboxToAdd, id: v4()}
        console.log('POST :', timeboxes)
        timeboxes.push(addedTimebox);
        return addedTimebox;   
    },
    replaceTimebox: async function(timeboxToReplace) {
        await wait(200);
        if (!timeboxToReplace.id) {
            throw new Error('cannot replace timebox without an id');
        }
        const index = findIndexByAnId(timeboxToReplace.id);
        const replaceTimebox ={...timeboxToReplace};
        timeboxes[index]= replaceTimebox;
        console.log('PUT :', timeboxes)
        return replaceTimebox;

    },
    removeTimebox: async function(timeboxToRemove) {
        await wait(200);
        console.log(timeboxToRemove);
        if (! timeboxToRemove) {
            throw new Error('cannot remove timebox without an id');
        }
        // const index = findIndexByAnId(timeboxToRemove);
        // console.log(index);
        // timeboxes.splice(index, 1);
        // console.log('DELETE:', timeboxes)
        return (timeboxToRemove)
    },
    
}

export default FakeTimeboxesApi;