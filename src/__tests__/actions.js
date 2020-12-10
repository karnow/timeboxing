const { setTimeboxes } = require("../actions");

// import {setTimeboxes} from '../actions';


test('setTimeboxes emites TIMEBOXES_SET action', () => {
    expect(setTimeboxes([])).toEqual(
        {type: "TIMEBOXES_SET", timeboxes: []}
    )
});