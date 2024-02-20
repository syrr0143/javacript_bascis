
let userscore = 0
let computerscore = 0
let choicess = document.querySelectorAll("#choices button");

let computerchoices = () => {
    let choose = ["Rock", "Paper", "Scissor"]
    let inx = Math.floor(Math.random() * 3)
    return choose[inx]

}

let userchose = ''
choicess.forEach((choices) => {

    choices.addEventListener("click", () => {
        userchose = choices.id
        console.log(userchose)
        let computerchose = computerchoices()
        console.log(computerchoices())
        result(userchose, computerchose)
    })
})

let result = (userChoice, computerChoice) => {
    if (
        (userChoice === "Rock" && computerChoice === "Scissor") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissor" && computerChoice === "Paper")
    ) {
        userscore++;
        console.log("User wins! User score: " + userscore);
    } else if (userChoice !== '' && userChoice !== computerChoice) {
        computerscore++;
        console.log("Computer wins! Computer score: " + computerscore);
    } else {
        console.log("It's a tie!");
    }
};






