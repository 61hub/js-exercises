function reverseNumber(number) {
    // convert number to string
    var stringifiedNumber = number + "";
    console.log(stringifiedNumber);

    // convert string to array with String.split() method
    var chars = stringifiedNumber.split("");
    console.log(chars);

    // reverse array with Array.sort() method
    var reversedChars = chars.reverse();
    console.log(reversedChars);

    // join array to string with Array.join() method
    var reversedString = reversedChars.join("");
    console.log(reversedString);

    // parse number from string with global window.parseInt() function
    var reversedNumber = parseInt(reversedString);

    return reversedNumber;
}

var number = 12345;
var reversedNumber = reverseNumber(number);

console.log(reversedNumber);