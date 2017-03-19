function joinArray(array, separator) {
    // Use Array.join() method
    return array.join(separator);
}

console.log( joinArray(["Hello", "ladies"], " ") );
console.log( joinArray([8, 968, 945, 41, 72], "-") );