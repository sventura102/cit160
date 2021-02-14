function checkAnswer() {
    //Input - Get user inputs and assign to variables
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let answer = parseFloat(document.getElementById('answer').value);
    let operator = document.getElementById('operator').value;
    let correct;
    //Processing - Use switch statement to verify arithmetic operators selected and calculate answer
    switch (operator) {
        case "+":
            correct = number1 + number2;
            break;
        case "-":
            correct = number1 - number2;
            break;
        case "*":
            correct = number1 * number2;
            break;
        case "/":
            correct = number1 / number2;
            break;
    }
    //Output - Compare users answer to answer calculated by the computer. If results are the same display "Correct", otherwise "Incorrect". Cute emoticons included.
    if (answer == correct) {
        document.getElementById('output').innerHTML = 'Correct! 🏆';
    }
    else {
        document.getElementById('output').innerHTML = 'Incorrect! 😢';
    }
}