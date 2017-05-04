$(document).ready(function () {

    //PART 1 => get the upper limit from the user input
    var limit = prompt("Please set the upper limit to play FizzBuzz.");

    //PART 2 => Starting the validation
    validateInput(limit);

});


function validateInput(inputNumber) {
    var userInputCorrectFlag = true;

    while (inputNumber.length < 1) {
        var inputNumber = prompt("Please enter 1 digit or more.");
        userInputCorrectFlag = false;
    }

    //if there are spaces (OR the number of spaces is larger than 0)
    while (inputNumber.indexOf(' ') > 0) {
        var inputNumber = prompt("Please don't enter spaces. Try a number!");
        userInputCorrectFlag = false;
    }

    //the limit is a number (if the rounded value of your number (Math.floor(inputNumber)) is the same with the initial number (inputNumber), it means that the number (inputNumber) was integer in the first place)
    while (Math.floor(inputNumber) != inputNumber) {
        var inputNumber = prompt("Your upper limit was not a number. Set it again.");
        //change the user input flag to false
        userInputCorrectFlag = false;
    }

    if (userInputCorrectFlag = true) {
        playFizzBuzz(inputNumber);
    }
}

function playFizzBuzz(limit) {
    for (var counter = 1; counter <= limit; counter++) {
        $('#showResults').append(checkFizzAndBuzz(counter));
    }
}


//PART 3.2 => check the each number and show the results
function checkFizzAndBuzz(currentNumber) {

    //set the default value for the msg variable
    var msg = "<li>" + currentNumber + "</li>";

    if (currentNumber % 3 == 0) {
        msg = "<li>Fizz</li>";
    }
    if (currentNumber % 5 == 0) {
        msg = "<li>Buzz</li>";
    }
    if ((currentNumber % 3 == 0) && (currentNumber % 5 == 0)) {
        msg = "<li>FizzBuzz</li>";
    }
    //output the msg
    return msg;
}
