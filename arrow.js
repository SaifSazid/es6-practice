// function doubleIt(num){
    // return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt = num => num * 2; //Arrow Function
const add = (x, y) => x + y;
const doMath = (x, y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}


const result1 = doubleIt(5);
const result2 = add(10, 10);
const result3 = doMath(7, 5);

console.log(result3);