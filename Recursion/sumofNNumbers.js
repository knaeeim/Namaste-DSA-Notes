function sumOfFirstNNumber(n) {
    if(n === 0) return 0; 
    let sum = sumOfFirstNNumber(n - 1) + n;
    return sum;
}

console.log(sumOfFirstNNumber(5));