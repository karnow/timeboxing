function getMinutesAndSecoundsFromDurationInSecounds(durationInSecounds) {
    const minutes = Math.floor(durationInSecounds/60);
    const secound = Math.floor(durationInSecounds%60);
    return [minutes, secound];
     }


     function fib(x) {
        return x <= 1 ? x : fib(x-2) + fib(x-1)
        }


     

     export {
         getMinutesAndSecoundsFromDurationInSecounds, fib
     };