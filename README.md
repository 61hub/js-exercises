# Arrays
- [x] (1) Write a function that reverse a number.
- [x] (2) Write a function that returns a passed string with letters in alphabetical order.
- [x] (3) Write a function that accepts a string as a parameter and find the longest word within the string.
- [ ] (4) Write a function to check whether an `input` is an array or not.
  ```javascript
  console.log( yourFunc('some text!') ); // => false // (not array) 
  console.log( yourFunc([1, 2, 4, 0]) ); // => true  // (array)
  ```
- [ ] (5) Write a function to get the first "n" elements of an array.
  ``` javascript
  console.log( yourFunc([1, 2, 3, 4, 5], 3) ); // => [1, 2, 3] 
  console.log( yourFunc([3, 2, 31, 34, 5], 1) ); // => [3]
  ```
- [ ] (6) Write a function to get the last element of an array.
  ``` javascript
  console.log( yourFunc([1, 2, 3, 4, 5]) ); // => 5 
  console.log( yourFunc([3, 2, 31, 34, 7]) ); // => 7
  ```
- [ ] (7) Write a function to join all elements of the array into a string with needed separator.
  ``` javascript
  console.log( yourFunc(["Hello", "ladies"], " ") ); // => "Hello ladies" 
  console.log( yourFunc([8, 968, 945, 41, 72], "-") ); // => "8-968-945-41-72"
  ```
- [ ] (8) Write a function to remove duplicate items from an array.
  ``` javascript
  console.log( yourFunc([1, 2, 4, 5, 2, 3, 5]) ); // => [1, 2, 4, 5, 3] 
  console.log( yourFunc(["Moscow", "Rome", "Paris", "Madrid", "Rome", "Moscow"]) ); // => ["Moscow", "Rome", "Paris", "Madrid"]
  ```
- [ ] (9) Write a function to sort the following array of objects by title value.
  ```javascript
  var books = [
    {title: "Golden gold"},
    {title: "War and sex"},
    {title: "Deep into rip"}
  ];
  console.log( yourFunc(books) ); // => [{title: "Deep into rip"}, {title: "Golden gold"}, {title: "War and sex"}]
  ```
- [ ] (10) Write a function to merge two arrays and removes all duplicates elements.
  ```javascript
  console.log( yourFunc( [1, 2, 3, 4], [2, 3, 4, 5] ) ); // => [1, 2, 3, 4, 5]
  console.log( yourFunc( ["Rome", "Moscow", "Paris"], ["Paris", "Amsterdam", "London"] ) ); // => ["Rome", "Moscow", "Paris", "Amsterdam", "London"]
  ```
- [ ] (11) Write a function to find an array contains a specific element.
  ```javascript
  console.log( yourFunc( [1, 2, 3, 4, 5], 5 ) );          // => true  // 5 is in array so "true"
  console.log( yourFunc( [1, 2, 3, 4, 5], 12 ) );         // => false // 12 isn't in array so "false"
  console.log( yourFunc( ["Rome", "Moscow"], "Rome" ) );  // => true // "Rome" is in array so "true"
  ```
  
# Callbacks
- [x] (1) Write a JavaScript program to pass a 'JavaScript function' as parameter.

# Conditions
- [ ] (1) Write a JavaScript function that accept two numbers as parameters and display the larger one

# Loops
- [ ] (1) Write a JavaScript loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the console.

  Sample Output : 
  ``` 
   "0 is even" 
   "1 is odd" 
   "2 is even" 
   ```
- [ ] (2) Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
- [ ] (3) Write a JavaScript program to list the properties of a JavaScript object.

# Strings
- [ ] (1) Write a JavaScript function to check whether a string is blank or not.
- [ ] (2) Write a JavaScript function to split a string and convert it into an array of words.
- [ ] (3) Write a JavaScript function to remove specified number of characters from a string.
- [ ] (4) Write a JavaScript function to capitalize the first letter of each word in a string.
- [ ] (5) Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…").
- [ ] (6) Write a JavaScript function to strip leading and trailing spaces from a string.
- [ ] (7) Write a JavaScript function to find a word within a string. Go to the editor
  Test Data :
  console.log(search_word('The quick brown fox', 'fox')); 
  console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
  Output : 
  "'fox' was found 1 times." 
  "'aa' was found 2 times."
- [ ] (8) 

# Types
- [x] (1) Write a JavaScript function which accepts an argument and returns the type.

# Objects
- [ ] (1) Write a JavaScript program to delete specific property from the following object. Also print the object to console before and after deleting the property.
- [ ] (2) Write a JavaScript function to check if an object contains given property.
