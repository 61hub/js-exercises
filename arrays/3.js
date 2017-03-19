function findTheLongestWord(string) {
    // split string to array using " " (space) as separator
    var words = string.split(" ");
    console.log(words);

    // find the longest word in array of words with Array.forEach() method-iterator
    var longestWord = "";
    words.forEach(function(word) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    });
    console.log(longestWord);

    return longestWord;
}

var string = "Hello my love";
var longestWord = findTheLongestWord(string);

console.log(longestWord);