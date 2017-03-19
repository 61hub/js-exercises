function doStringAphabetical (string) {
    // convert string to lowercase with String.toLowerCase() method
    string = string.toLowerCase();
    console.log(string);

    // convert String to Array with String.split() method
    var splited = string.split("");
    console.log(splited);

    // sort array with Array.sort() method
    var sorted = splited.sort();
    console.log(sorted);

    // join Array back to string with Array.join() method
    var result = sorted.join("");
    console.log(result);

    // remove spaces at the start of string with String.trim() method
    result = result.trim();
    console.log(result);

    return result;
}

var basicString = "Some string";
var alphabeticalString = doStringAphabetical(basicString);

console.log(alphabeticalString);