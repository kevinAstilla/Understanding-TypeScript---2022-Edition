"use strict";
let u1 = { name: 'kevin' };
u1 = 'vin';
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
function addComplex(n1, n2, showResult, prefix) {
    const result = n1 + n2;
    if (showResult) {
        console.log(prefix + result);
    }
    return result;
}
//assigning a function to a variable
let combineFunction;
combineFunction = combine;
//function with callback
function addAndHandle(n1, n2, cb) {
    cb(n1 + n2);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
console.log(combine(12, 24, 'as-number'));
console.log(combine('kevin', 'astilla', "as-text"));
console.log(combine('6', '6', "as-number"));
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
