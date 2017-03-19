function getLastItemOf(array) {
    // Get last item index. Indexes start from 0, so we need to decrease length by 1
    var lastItemIndex = array.length - 1;

    // Just get last item by its index
    var lastItem = array[lastItemIndex];
    
    return lastItem;
}

console.log( getLastItemOf([1, 2, 3, 4]) );
console.log( getLastItemOf([]) ); // => no items, so last item is undefined
console.log( getLastItemOf(["Moscow", "Paris"]) );
console.log( getLastItemOf([true]) );