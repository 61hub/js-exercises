function sliceArray(array, length) {
    // Use Array.slice() method
    return array.slice(0, length);
}

console.log( sliceArray([1,2], 1) );
console.log( sliceArray(["Vasya", "Petya", "Fedor"], 2) );