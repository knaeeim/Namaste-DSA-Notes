
const arr = [5, 3, 2, 0, 1];

function sumofOddNumbers(array, n) {
    if(n < 0) return 0;
    if(array[n] % 2 === 1 && n === 0) return array[n];
    else if(n === 0) return 0;

    if(array[n] % 2 === 1) return array[n] + sumofOddNumbers(array, n - 1);
    else return sumofOddNumbers(array, n - 1);
}

console.log(sumofOddNumbers(arr, arr.length - 1));