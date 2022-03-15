//creating Aliases
type Combinable = number | string;

type User = {name: string} | string;

let u1: User = {name: 'kevin'};
u1 = 'vin';

function combine(
    input1: Combinable,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

function addComplex(n1: number, n2: number, showResult: boolean, prefix: string) {

    const result = n1 + n2;
    if (showResult) {
        console.log(prefix + result);
    }
    
    return result;
}
//assigning a function to a variable
let combineFunction: (n1: number, n2: number, resultConversion: 'as-number' | 'as-text') => number | string;

combineFunction = combine;

//function with callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    cb(n1 +n2);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});



console.log(combine(12, 24, 'as-number'));
console.log(combine('kevin', 'astilla', "as-text"));
console.log(combine('6', '6', "as-number"));



function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
});