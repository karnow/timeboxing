const { createStore } = require("redux");
const { addTimebox, removeTimebox } = require("../actions");
const { timeboxesReducer, getAllTimeboxes ,getTimeboxByID} = require("../reducers");

let store =null;

describe('timeboxes atate changes', ()=>{
    beforeEach(()=>{
        store = createStore(timeboxesReducer);

    });
    
    test('initiality timeboxes are empty', () => {
        const timeboxes = getAllTimeboxes(store.getState());
        expect(timeboxes).toEqual([])
        
    });

    test('addtimebox action inserts a new timebox', () => {
        
        const newTimebox = {id: "I am new timebox"};
        store.dispatch(addTimebox(newTimebox));
        const timeboxes = getAllTimeboxes(store.getState());
        expect(timeboxes).toEqual([newTimebox])
    });
    
    test('removetimebox action removes a timebox', () => {
        
        const aTimebox = {id: "I am new timebox"};
        const anotherTimebox = {id: "I am another timebox"};
        store.dispatch(addTimebox(aTimebox));
        store.dispatch(addTimebox(anotherTimebox));

        store.dispatch(removeTimebox(aTimebox));

        const timeboxes = getAllTimeboxes(store.getState());
        expect(timeboxes).toEqual([anotherTimebox]);

        console.log(getTimeboxByID(store.getState(), "I am new timebox"));

        expect(getTimeboxByID(store.getState(), "I am new timebox")).toBe(undefined);
        expect(getTimeboxByID(store.getState(),"I am another timebox")).toBe(anotherTimebox)
    });
});