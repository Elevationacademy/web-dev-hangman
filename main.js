let allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let score = 100
let word = ""
let hint = ""
let guessedLetters = ["C", "I"]

function displayScore() {
    $("#score").empty()
    $("#score").append("<div>" + score + "</div>")
}

function displaySecretWordLetters() {
    $("#secret-word").empty()

    for (let index in word) {
        let letter = word[index]

        if (guessedLetters.includes(letter)) {
            $("#secret-word").append(`<span class='letter guessed-letter'>${letter}</span>`)
        }
        else {
            $("#secret-word").append(`<span class='letter guessed-letter'>_</span>`)
        }
    }
}

function displayHint() {
    $("#hint").empty()
    $("#hint").append("<div>" + hint + "</div>")
}

function displayAllLetters() {
    $("#all-letters").empty()

    for (let index in allLetters) {
        let letter = allLetters[index]

        if (!guessedLetters.includes(letter)) {
            $("#all-letters").append(`<span class=letter>${letter}</span>`)
        }
        else {
            $("#all-letters").append(`<span class=selected>${letter}</span>`)
        }
    }
}

function displayLetterInput() {
    $("#input-area").empty()
    $("#input-area").append("<input placeholder='Letter (capital)' id='letter'>")
    $("#input-area").append("<button onclick=selectLetter()>Select Letter</button>")
}

function selectLetter() {
    let letter = $("#letter").val()
    if (word.includes(letter) && !guessedLetters.includes(letter)) {
        score = score + 5
    }
    else {
        score = score - 20
    }

    guessedLetters.push(letter)

    $("#letter").val("")

    if (score <= 0) {
        $("#game-over").append("You lost")
    }

    displayScore()
    displayAllLetters()
    displaySecretWordLetters()
}

function startGame() {
    word = $("#word-input").val()
    hint = $("#hint-input").val()
    // guessedLetters = []

    displayScore()
    displaySecretWordLetters()
    displayHint()
    displayAllLetters()
    displayLetterInput()

    // $("#word-input").val("")
    // $("#hint-input").val("")
}
