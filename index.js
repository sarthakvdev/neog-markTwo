var readline = require("readline-sync");
var score = 0;

var user = readline.question("May I know your name first?\n");
user = user.charAt(0).toUpperCase() + user.toLowerCase().slice(1);

console.log(`Welcome ${user}, let's start with Friends Quiz!`);

// Array of quiz questions and answers
const questions = [
	{
		que: "How many friends are in FRIENDS show: 4, 6 or 8?",
		ans: "6"
	},
	{
		que: "First episode of Friends was released in which year?",
		ans: "1994"
	},
	{
		que: "It is based in which city?",
		ans: "newyork"
	},
	{
		que: "What's the name of brother of Monica?",
		ans: "ross"
	}
];

// function that checks answers and update score
function checkAnswer(data, res) {
	if(data.ans === res.toLowerCase()) {
		score++;
		console.log(`Correct Answer :))\nScore: ${score}`);
	} else {
		score--;
		console.log(`Incorrect Answer :(\nScore: ${score}`);
	}
}

// For loop for questions
questions.forEach((data, index) => {
	var response = readline.question(`${index+1}. ${data.que}\n`);
	checkAnswer(data, response);
});

console.log(`\nThanks ${user} for using Quiz App\nYour final score is ${score}`);