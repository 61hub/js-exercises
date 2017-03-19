function reverseNumber(number) {
    // convert number to string
    var stringifiedNumber = number + "";
    console.log(stringifiedNumber);

    // convert string to array
    var splited = stringifiedNumber.split("");
    console.log(splited);

    // reverse array
    var reversedArray = splited.reverse();
    console.log(reversedArray);

    // join array to string
    var joinedString = reversedArray.join("");
    console.log(joinedString);

    // parse number from string
    var reversedNumber = parseInt(joinedString);

    return reversedNumber;
}

var number = 12345;
var reversedNumber = reverseNumber(number);

console.log(reversedNumber);