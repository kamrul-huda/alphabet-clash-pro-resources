// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){   
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
}

function play(){
    hideElementById('home');
    showElementById('play-ground');

    continueGame();
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const index = Math.round(Math.random() * alphabets.length);
    const alphabet = alphabets[index];
    return alphabet;
}