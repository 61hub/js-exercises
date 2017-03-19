function reverseNumber(number) {
    // convert number to string
    var stringifiedNumber = number + "";
    console.log(stringifiedNumber);

    // convert string to array with String.split() method
    var splited = stringifiedNumber.split("");
    console.log(splited);

    // reverse array with Array.sort() method
    var reversedArray = splited.reverse();
    console.log(reversedArray);

    // join array to string with Array.join() method
    var joinedString = reversedArray.join("");
    console.log(joinedString);

    // parse number from string with global window.parseInt() function
    var reversedNumber = parseInt(joinedString);

    return reversedNumber;
}

var number = 12345;
var reversedNumber = reverseNumber(number);

console.log(reversedNumber);