const target = 10;

const arr = [4, 2, 7, 1, 9, 10, 3];

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, target));
