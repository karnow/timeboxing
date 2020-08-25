import {getMinutesAndSecoundsFromDurationInSecounds} from "../../lib/time";
import {fib} from "../../lib/time";
describe("getMinutesAndSecoundsFromDurationInSecounds", ()=> {
    
    test("getMinutesAndSecoundsFromDurationInSecounds worksv for 30 secounds",()=> {
        expect(getMinutesAndSecoundsFromDurationInSecounds(30)).toEqual([0,30])
    })
    
    test("getMinutesAndSecoundsFromDurationInSecounds return 30 secounds-duration",()=> {
        expect(getMinutesAndSecoundsFromDurationInSecounds(30)[1]).toBe(30)
    
    
    })
    test("getMinutesAndSecoundsFromDurationInSecounds return 2 h and 20 minutes for 140 secounds-duration",()=> {
        expect(getMinutesAndSecoundsFromDurationInSecounds(140)).toEqual([2,20]) 
    
    
    })


})


test("fib", ()=> {
    expect(fib(4)).toBe(3)
})