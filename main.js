const GAME = {
    allLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    selectedLetters: [],
    secretWord: "BREAD",
    hint: "Eat this at breakfast"
}

const selectLetter = function (letter) {
    GAME.selectedLetters.push(letter)
    render()
}

const renderEndGame = function () {
    $("#game").addClass("hidden")
    $("#end-game").removeClass("hidden")
    $("#end-game").append("<div class=end-game>Congratulations! You guessed the word " + GAME.secretWord + "!</div>")
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

const render = function () {
    if (guessedAllLetters()) {
        renderEndGame()
    }
    else {
        $("#hint").text(GAME.hint)
        $("#end-game").addClass("hidden")

        renderSecretWordLetters()
        renderAvailableLetters()
    }
}

render()