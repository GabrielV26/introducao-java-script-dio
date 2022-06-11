// comentar uma linha
/*comentar várias linhas*/

function soma(a, b){
    return a + b;
}

console.log(soma(3,5));
console.log("Hello world!");

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);

        }else{
            console.log(`${array[i]} não é par`);
        }
    }
    console.log('Os numero pares são:',evenNums);
}

let arrayFilter = [5, 6, 8, 10, 15, 25, 2];

returnEvenValues(arrayFilter);