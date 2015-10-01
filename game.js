
var userName = prompt('Enter your name here.')

var score = 0;
var message;



function ques1() {
  var question1 = prompt('What state did I grow up in?');
  if (question1.toUpperCase() === "CALIFORNIA" || question1.toUpperCase() === "C" || question1.toUpperCase() === "CA") {
	alert('Great job ' + userName + '!  There are a lot of states to choose from.');
	score += 1;
  } else {
	alert('Sorry ' + userName + ' .  I was born in California.');
  }
  console.log('user response to question 1 is: ' + question1);
}

function ques2() {
  var question2 = prompt('What college did I go to?');
  if (question2.toUpperCase() === 'BROOKS INSTITUTE OF PHOTOGRAPHY' || question2.toUpperCase() === 'BROOKS') {
	alert('Hey ' + userName + ' That was an amazing guess.  Not too many people know that.');
	score += 1;
  } else {
	alert('Good guess ' + userName + ' , but not right.  Try again!');
  }
  console.log('user reponse to question 2 is: ' + question2);
}

function ques3() {
  var question3 = prompt('How long have I been Married?');
  if (question3 === '18 Years' || question3 === '18' || question3 === 'eighteen years') {
	alert('Absolutely right ' + userName + ' Nice job.');
	score += 1;
  } else {
	alert('I know it\'s hard to guess ' + userName + '.  I\'ll give you a hint, it is more than 10.');
  }

  console.log('user response to question 3 is: ' + question3);


}

ques1();
ques2();
ques3();





// message = 'Good job ' + userName + ', you got' + score + ' out of 3 correct!';
// document.write(message);




// alert("you guessed " + question1 + ".  I grew up in California");
// alert('I am sure your guess of ' + question2 + ' is probably incorrect.  I went to a small college in Santa Barbara called Brooks.');
// alert('Your guess was ' + question3 + ' .  I have been married for 18 years.');
