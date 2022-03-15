function add(n1: number, n2: number, showResult: boolean, prefix: string) {

    const result = n1 + n2;
    if (showResult) {
        console.log(prefix + result);
    }
    
    return result;
}

let number1: number;

number1 = 5
const number2 = 0.1;

const prx = 'Result is: ';


const result = add(number1, number2, true, prx);
