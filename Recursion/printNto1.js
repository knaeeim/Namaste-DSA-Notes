function printNto1(n){
    if( n < 1) return; 
    console.log(n);
    n -= 1;
    printNto1(n);
}

printNto1(10);