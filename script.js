/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 * 
 * python -m http.server
 */

function sleep_in(weekday,vacation){
    if (!weekday || vacation) {
        return true;
    }else{
        return false;
    }
}

function monkey_trouble(a_smile,b_smile) {
    if (a_smile && b_smile || !a_smile && !b_smile) {
        return true;
    }else{
        return false;
    }
}

function string_times(str,num){
    let mult = ""
    for (let i = 0; i < num; i++) {
        mult = mult + str
    }
    return mult;
}

function front_times (str,num) {
    let short = str.substring (0,3);
    let ret = "";
    for (let i = 0; i < num; i++){
        ret = ret + short; 
    }
    return ret;
}

function string_bits(word) {
    let alternate = "";
    for (let i = 0; i < word.length; i=i+2){
        alternate = alternate + word.substring (i, i+1);
    }
    return alternate;
}

function caughtSpeeding (speed, birthday) {
    let ticket = 0;
    if (!birthday) { 
        if (speed > 60 && speed <= 80) {
        ticket = 1;
        }
    if (speed > 80) {
        ticket = 2;
    }
    }else{
       if (speed > 65 && speed <= 85) {
        ticket = 1;
    }
    if (speed > 85) {
        ticket = 2;
        }
    }
    return ticket
}

function fizz_buzz(number) {
    let numer = "";
    if (number % 3 == 0) {
        numer = "Fizz";
    }
    if (number % 5 == 0) {
        numer = numer + "Buzz"
    }
    if (numer % 5 ==0 || numer % 3 == 0) {
        return (number + "!");
    }else{
        return numer;
    }
}

function specialEleven(number) {
    if (number % 11 == 0 || number % 11 == 1) {
        return true;
    }else{
        return false;
    }
}

function withoutDoubles (num1,num2,noDoubles) {
    if (num1 == num2 && noDoubles) {
        if (num1 == 6) {
            return num1 + num2 -5;
        }else{
            return num1 + num2 +1;
        }
    }else{
        return num1 + num2;
    }
}

function left2 (word) {
    return word.substring (2) + word.substring (0,2)
}