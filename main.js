function computerPlay() {
	let randomPick = Math.floor(Math.random() * 3) + 1;

	switch (randomPick) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissor";
	}
}

function playRound(playerSelection, computerSelection) {
	console.log(playerSelection, computerSelection);
	if (playerSelection === computerSelection) {
		return `Its a tie! You both picked ${playerSelection}.`;
	} else if (playerSelection === "rock" && computerSelection === "scissor") {
		return `Win! ${playerSelection} beats ${computerSelection}`;
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		return `Win! ${playerSelection} beats ${computerSelection}`;
	} else if (playerSelection === "scissor" && computerSelection === "paper") {
		return `Win! ${playerSelection} beats ${computerSelection}`;
	} else {
		return `Lose! ${playerSelection} loses to ${computerSelection}`;
	}
}

let playerWins = 0;
let computerWins = 0;

for (let i = 0; i < 5; i++) {
	let playerPick = prompt(
		"Please type 'rock', 'paper', or 'scissor':"
	).toLowerCase();
	let computerPick = computerPlay();

	let winner = playRound(playerPick, computerPick);
	console.log(winner);
	if (winner.startsWith("Win!")) {
		playerWins++;
	} else if (winner.startsWith("Lose!")) {
		computerWins++;
	}
	console.log(playerWins, computerWins);
}
