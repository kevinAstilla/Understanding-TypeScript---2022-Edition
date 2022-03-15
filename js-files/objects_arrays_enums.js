"use strict";
//declaring an enum
var Priveledges;
(function (Priveledges) {
    Priveledges[Priveledges["ADMIN"] = 0] = "ADMIN";
    Priveledges[Priveledges["READ_ONLY"] = 5] = "READ_ONLY";
    Priveledges[Priveledges["AUTHOR"] = 6] = "AUTHOR";
})(Priveledges || (Priveledges = {}));
;
const person = {
    name: 'kevin',
    age: 31,
    hobbies: ['hiking', 'coding'],
    role: [2, 'software developer'],
    priveledge: Priveledges.ADMIN
};
// const person = {
//     name: 'kevin',
//     age: 31,
//     hobbies: ['hiking', 'coding'],
//     role: [2, 'software developer']
// };
var programmingLanguages;
programmingLanguages = ['c++', 'python'];
console.log(person.age);
