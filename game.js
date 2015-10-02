var questions = ['What state did I grow up in?','What college did I go to?', 'How long have I been Married?'];
var answers = ["CALIFORNIA","C","CA",'BROOKS INSTITUTE OF PHOTOGRAPHY','BROOKS','18 Years','18','eighteen years'];

var userName = prompt('Enter your name here.')

var score = 0;
var message;

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var msg = document.getElementById('msg');
var picOne = document.getElementById('picOnes');
var picTwo = document.getElementById('picTwos');
var picThree = document.getElementById('picThrees');
function ques1() {
  var question1 = prompt(questions[0]);
  if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1] || question1.toUpperCase() === answers[2]) {
	one.innerHTML = 'Great job ' + userName + '!  There are a lot of states to choose from.';
	picOne.innerHTML = '<img src="img/san_diego.jpeg" width="200"/>';
	score += 1;
  } else {
	one.innerHTML ='Sorry ' + userName + ' .  I was born in California.';
  }
  console.log('user response to question 1 is: ' + question1);
}

function ques2() {
  var question2 = prompt(questions[1]);
  if (question2.toUpperCase() === answers[3] || question2.toUpperCase() === answers[4]) {
	two.innerHTML = 'Hey ' + userName + ' That was an amazing guess.  Not too many people know that.';
	picTwo.innerHTML = '<img src="img/san_diego.jpeg" width ="200"/>';
	score += 1;
  } else {
	two.innerHTML ='Good guess ' + userName + ' , but not right.  Try again!';
  }
  console.log('user reponse to question 2 is: ' + question2);
}

function ques3() {
  var question3 = prompt(questions[2]);
  if (question3 === answers[5] || question3 === answers[6] || question3 === answers[7]) {
	three.innerHTML = 'Absolutely right ' + userName + ' Nice job.';
	score += 1;
	picThree.innerHTML = '<img src="img/couple.jpeg" width ="200"/>';
  } else {
	three.innerHTML = 'I know it\'s hard to guess ' + userName + '.  I\'ll give you a hint, it is more than 10.';
  }

  console.log('user response to question 3 is: ' + question3);


}

// ques1();
// ques2();
// ques3();
ques1();
window.setTimeout(ques2, 1000);
window.setTimeout(ques3, 1000);

message = 'Good job ' + userName + ', you got ' + score + ' out of 3 correct!';
msg.innerHTML = message;


// document.write(message);




// alert("you guessed " + question1 + ".  I grew up in California");
// alert('I am sure your guess of ' + question2 + ' is probably incorrect.  I went to a small college in Santa Barbara called Brooks.');
// alert('Your guess was ' + question3 + ' .  I have been married for 18 years.');
