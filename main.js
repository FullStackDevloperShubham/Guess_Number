let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numberOfGuesses = 1

let playGame = true

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid guess')
  } else if (guess < 1) {
    alert('Please enter a number grater than 1')
  } else if (guess > 100) {
    alert('Please enter a number less than 100')
  } else {
    prevGuess.push(guess)
    if (numberOfGuesses === 11) {
      displayGuess(guess)
      displayMessage(`Game Over .Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guess number is right`)
    endGame()
  } else if (guess < randomNumber) {
    displayMessage(`Numer is Too Low`)
  } else if (guess > randomNumber) {
    displayMessage(`Numer is Too Low`)
  }
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess} \t`
  numberOfGuesses++
  remaining.innerHTML = `${11 - numberOfGuesses}`
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function (event) {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numberOfGuesses = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numberOfGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}


