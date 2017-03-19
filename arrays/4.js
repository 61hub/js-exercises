function isArray(variable) {
    // old variant. Use special word "instanceof"
    // return variable instanceof Array;

    // modern variant. Use Array.isArray() method
    return Array.isArray(variable);
}

console.log(isArray(""));
console.log(isArray({}));
console.log(isArray(null));
console.log(isArray([]));
console.log(isArray([1, 2, null]));