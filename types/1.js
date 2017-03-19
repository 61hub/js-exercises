function getTypeOf(variable) {
    // use special word "typeof" to get type of variable
    return typeof variable;
}

console.log( getTypeOf(1) );
console.log( getTypeOf("Hi") );
console.log( getTypeOf({}) );
console.log( getTypeOf( parseInt ) );
console.log( getTypeOf(true) ); 
console.log( getTypeOf(undefined) );

console.log( getTypeOf([]) ); // => object
console.log( getTypeOf(null) ); // => object
console.log( getTypeOf(NaN) ); // => number