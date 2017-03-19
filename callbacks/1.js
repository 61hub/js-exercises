function getCurrentTimeAndMoveItToAnotherFunction(anotherFunction) {
    // get current time with Data API
    var currentTime = new Date();

    // call callback function and pass currentTime as parameter
    anotherFunction(currentTime);

    // no need to return anything
}

// call getCurrentTimeAndMoveItToAnotherFunction  and pass another function as paramether
// another function will be called when getCurrentTimeAndMoveItToAnotherFunction decide to call it
// another function is callback function (call some time later function)
getCurrentTimeAndMoveItToAnotherFunction(function (currentTime) {
    console.log(currentTime);
});

var callLaterFunction = function(result) {
    console.log(result);
};

getCurrentTimeAndMoveItToAnotherFunction(callLaterFunction);

function callbackFunc(time) {
    console.log(time);
}

getCurrentTimeAndMoveItToAnotherFunction(callbackFunc);