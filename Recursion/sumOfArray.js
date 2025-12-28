function sumOfArray(arr, index = 0) {
    if(index === arr.length) {
        return 0;
    }
    return arr[index] + sumOfArray(arr, index + 1);
}

console.log(sumOfArray([1, 2, 3, 4, 5]));

const arr = [10, 20, 30, 40, 50, 60]; 

function sumArrayElements(idx) {
    if(idx === 0) return arr[0];
    return arr[idx] + sumArrayElements(idx - 1);
}

console.log(sumArrayElements(arr.length - 1));