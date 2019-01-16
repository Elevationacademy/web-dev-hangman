const GAME = {
    allLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    selectedLetters: [],
    secretWord: "",
    hint: "",
    score: 100
}

const updateScore = function (letter) {
    if (GAME.secretWord.includes(letter) && !GAME.selectedLetters.includes(letter)) {
        GAME.score += 5
    }
    else if (!GAME.secretWord.includes(letter) && !GAME.selectedLetters.includes(letter)) {
        GAME.score -= 20
    }
}

const selectLetter = function (letter) {
    updateScore(letter)
    GAME.selectedLetters.push(letter)
    render()
}

const showGameOver = function () {
    $("#end-game").append("<div class=end-game>Alas, you lost. The word was " + GAME.secretWord + "</div>")
}

const showCongratulations = function () {
    $("#end-game").append("<div class=end-game>Congratulations! You guessed the word!</div>")
}

const renderEndGame = function () {
    $("#end-game").empty()
    $("#end-game").removeClass("hidden")
    $(".input").removeClass("hidden")

    if (GAME.score <= 0) { showGameOver() }
    else { showCongratulations() }
}

const renderScore = function () {
    $("#score").text("Score: " + GAME.score)
}

const isSelected = function (l) {
    return GAME.selectedLetters.includes(l)
}


const renderSecretWordLetters = function () {
    const secretWordDiv = $("#secret-word")
    secretWordDiv.empty()

    for (let letter of GAME.secretWord.split("")) {
        if (isSelected(letter)) {
            secretWordDiv.append("<span class='letter secret'>" + letter + "<span>")
        }
        else {
            secretWordDiv.append("<span class='letter secret'>_<span>")
        }
    }
}

const renderAvailableLetters = function () {
    const allLettersDisplayDiv = $("#all-letters-display")
    allLettersDisplayDiv.empty()

    for (let letter of GAME.allLetters) {
        if (isSelected(letter)) {
            allLettersDisplayDiv.append("<span class='selected letter'>" + letter + "</span>")
        }
        else {
            allLettersDisplayDiv.append("<span onclick=selectLetter('" + letter + "') class=letter>" + letter + "</span>")
        }
    }
}

const guessedAllLetters = function () {
    for (let letter of GAME.secretWord.split("")) {
        if (!GAME.selectedLetters.includes(letter)) {
            return false
        }
    }
    return true
}

render = function () {
    if (GAME.score <= 0 || guessedAllLetters()) {
        renderEndGame()
    }
    else {
        $("#hint").text("Hint: " + GAME.hint)
        $("#end-game").addClass("hidden")
    }

    renderScore()
    renderSecretWordLetters()
    renderAvailableLetters()
}

const startGame = function () {
    GAME.selectedLetters = []
    GAME.secretWord = $("#secret-word-input").val().toUpperCase()
    GAME.hint = $("#hint-input").val()
    GAME.score = 100

    $("#secret-word-input").val("")
    $("#hint-input").val("")
    $(".input").addClass("hidden")
    $("#game").removeClass("hidden")

    render()
}