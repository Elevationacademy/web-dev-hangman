let allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let score = 100
let word = ""
let hint = ""
let guessedLetters = []

function displayScore() {
    $("#score").append("<div id='score-num'>100</div>")
}
function displaySecretWordLetters() {
    for (let letter of word) {
        if (guessedLetters.includes(letter)) {
            $("#secret-word").append(`<span class='letter guessed-letter'>${letter}</span>`)
        }
        else {
            $("#secret-word").append(`<span class='letter guessed-letter'>_</span>`)
        }
    }
}

function displayHint() {
    $("#hint").append("<div>" + hint + "</div>")
}

function displayAllLetters() {
    for (let letter of allLetters) {
        if (!guessedLetters.includes(letter)) {
            $("#all-letters").append(`<span class=letter>${letter}</span>`)
        }
        else {
            $("#all-letters").append(`<span class=selected>${letter}</span>`)
        }

    }
}

function displayLetterInput() {
    $("#input-area").append(`<input placeholder="Letter (capital)" id="letter">
<button onclick=selectLetter()>Select Letter</button>`)
}

function selectLetter() {
    let letter = $("#letter").val()
    guessedLetters.push(letter)

    $("#all-letters").empty()
    $("#secret-word").empty()
    $("#letter").val("")

    displayAllLetters()
    displaySecretWordLetters()
}

function startGame() {
    word = $("#word-input").val()
    hint = $("#hint-input").val()

    displayScore()
    displaySecretWordLetters()
    displayHint()
    displayAllLetters()
    displayLetterInput()
}
