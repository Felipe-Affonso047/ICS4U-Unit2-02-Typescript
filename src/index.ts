/*
* This program is a factorial calculator.
*
* @author  Felipe Garcia Affonso
* @version 1.0
* @since   2021-12-05
*/

import * as readline from 'readline';

function factorial(denominator: number) {
    // this function is a text reverser function.
    if (denominator == 0)
    {
        return 1;
    }
    else if (denominator > 0)
    {
        var returnValue: number = denominator * factorial(denominator - 1);
        return returnValue;
    }
    else
    {
        return 1;
    }
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input an integer: ", function(answer) {
    var factorialNum: number = factorial(parseInt(answer));
    console.log("The factorial of " + answer + " is " + factorialNum);
    rl.close();
});
