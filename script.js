function hideElement(){

    const elements = document. getElementsByClassName ('text');
    for (let i=0; i < elements.length; i++){
        elements[i].classList.add('hidden');
    }
}