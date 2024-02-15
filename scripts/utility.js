function hideElementById(elementId){
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add('hidden');
}

function showElementById(elementId){
    const homeSection = document.getElementById(elementId);
    homeSection.classList.remove('hidden');
}


function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function setBackgroundColorById(elementId){
    const currentAlphabetElement = document.getElementById(elementId);
    currentAlphabetElement.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const currentAlphabetElement = document.getElementById(elementId);
    currentAlphabetElement.classList.remove('bg-orange-400');
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}


function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const index = Math.round(Math.random() * alphabets.length);
    const alphabet = alphabets[index];
    return alphabet;
}