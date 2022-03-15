//declaring an enum
enum Priveledges {ADMIN, READ_ONLY = 5, AUTHOR};

const person : {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //this is a tuple
    priveledge: number;
} = {
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

var programmingLanguages: string[];
programmingLanguages = ['c++', 'python'];

console.log(person.age)