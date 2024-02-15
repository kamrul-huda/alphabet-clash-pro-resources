function continueGame() {
    const alphabet = getARandomAlphabet();
    setTextElementValueById('currentAlphabet', alphabet);
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home');
    showElementById('play-ground');
    hideElementById('score-section');
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver() {
    showElementById('score-section');
    hideElementById('play-ground');
    const lastScore = getElementValueById('current-score');
    setTextElementValueById('your-score', lastScore);

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    removeBackgroundColorById(currentAlphabet);
}

function handelKeyboardButtonPress(event) {
    const playerPressed = event.key;
    if (playerPressed === 'Escape')
        gameOver();

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {
        removeBackgroundColorById(expectedAlphabet);
        const currentScore = getElementValueById('current-score');
        const newScore = currentScore + 1;

        setTextElementValueById('current-score', newScore);
        continueGame();
    }
    else {

        const currentLife = getElementValueById('current-life');
        const newLife = currentLife - 1;

        if (newLife === 0) {
            gameOver();
        }
        setTextElementValueById('current-life', newLife);
        console.log('Lost Life');
    }
}

document.addEventListener('keyup', handelKeyboardButtonPress);



