function doStringAphabetical (string) {
    // convert string to lowercase with String.toLowerCase() method
    string = string.toLowerCase();
    console.log(string);

    // convert String to Array with String.split() method
    var chars = string.split("");
    console.log(chars);

    // sort array with Array.sort() method
    var sortedChars = chars.sort();
    console.log(sortedChars);

    // join Array back to string with Array.join() method
    var sortedStrimg = sortedChars.join("");
    console.log(sortedStrimg);

    // remove spaces at the start of string with String.trim() method
    sortedStrimg = sortedStrimg.trim();
    console.log(sortedStrimg);

    return sortedStrimg;
}

var basicString = "Some string";
var alphabeticalString = doStringAphabetical(basicString);

console.log(alphabeticalString);