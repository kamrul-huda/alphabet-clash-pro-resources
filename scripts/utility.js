function hideElementById(elementId){
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add('hidden');
}

function showElementById(elementId){
    const homeSection = document.getElementById(elementId);
    homeSection.classList.remove('hidden');
}