function removeDuplicatesFrom(array) {
    // Use Array.filter() method-iterator 
    // Please check first => https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    return array.filter(function(item, itemIndex) {
        // If this function returns false the item will be removed from filtered array

        // Use Array.indexOf method
        // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
        // .indexOf returns first index of element passed as argument
        /**
         * Some examples
         * [1, 2, 3, 4].indexOf(1); => 0
         * [1, 2, 3, 1].indexOf(1); => 0
         * ["Moscow", "Rome", "Paris"].indexOf("Rome");         => 1
         * ["Moscow", "Rome", "Paris", "Rome"].indexOf("Rome"); => 1
         */

        /**
         * Why do we need .indexOf() there?
         * Take a look on this example:
         * 
         * var array = ["Moscow", "Rome", "Moscow"];
         * 
         * we need to remove second "Moscow" from filtered array
         * 
         * this function will be called 3 times cause we have 3 items in our array
         *                |
         *                |
         *                V
         * array.filter(function(item, itemIndex) {  
         *      ...
         * });
         * 
         * step by step:
         * 
         * 1 iteration
         * array.filter(function(item = "Moscow", itemIndex = 0) {
         *      var isItemUnique = (array.indexOf(item) == itemIndex) equal (0 == 0) equal true
         *      return isItemUnique; equal return true // so this item will be saved
         * });
         * 2 iteration
         * array.filter(function(item = "Rome", itemIndex = 1) {
         *      var isItemUnique = (array.indexOf(item) == itemIndex) equal (1 == 1) equal true
         *      return isItemUnique; equal return true // so this item will be saved
         * });
         * 2 iteration
         * array.filter(function(item = "Moscow", itemIndex = 3) {
         *      Don't forget .indexOf() returns index of first equal item. So array.indexOf("Moscow") is 0 (not 2!!)
         * 
         *      var isItemUnique = (array.indexOf(item) == itemIndex) equal array.indexOf("Moscow") == 3 equal (0 == 3) equal false
         *      return isItemUnique; equal return false // so this item will be removed
         * });
         */
        var isItemUnique = (array.indexOf(item) == itemIndex);

        // If this function returns false the item will be removed from filtered array
        return isItemUnique; // returns true (save item) or false (remove item)
    });
}

console.log( removeDuplicatesFrom([1, 2, 4, 5, 2, 3, 5]) );
console.log( removeDuplicatesFrom(["Moscow", "Rome", "Paris", "Madrid", "Rome", "Moscow"]) );