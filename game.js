
var userName = prompt('Enter your name here.')





var question1 = prompt('What state did I grow up in?');
if (question1 === "CALIFORNIA") {
	alert('Great job ' + userName + '!  There are a lot to choose from.');
} else {
	alert('Sorry ' + userName + ' .  I was born in California.');
}
console.log('user response to question 1 is: ' + question1);


var question2 = prompt('What college did I go to?');
if (question2 === 'BROOKS INSTITUTE OF PHOTOGRAPHY') {
	alert('Hey ' + userName + ' That was an amazing guess.  Not too many people know that.');
} else {
	alert('Good guess ' + userName + ' , but not right.  Try again!');
}
console.log('user reponse to question 2 is: ' + question2);



var question3 = prompt('How long have I been Married?');
if (question3 === '18 Years') {
	alert('Absolutely right ' + userName + ' Nice job.');
} else {
	alert('I know it\'s hard to guess ' + userName + '.  I\'ll give you a hint, it is more than 10.');
}

console.log('user response to question 3 is: ' + question3);



 //made a change


// alert("you guessed " + question1 + ".  I grew up in California");
// alert('I am sure your guess of ' + question2 + ' is probably incorrect.  I went to a small college in Santa Barbara called Brooks.');
// alert('Your guess was ' + question3 + ' .  I have been married for 18 years.');
