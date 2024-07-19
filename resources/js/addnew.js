function showFictionForm() {
    document.querySelector('#fictionForm').classList.remove('hidden');
    document.querySelector('#goback').classList.remove('hidden'); 
    document.querySelector('#fiction_button').classList.add('hidden');
    document.querySelector('#nonfiction_button').classList.add('hidden');
}

function showNonFictionForm() {
    document.querySelector('#nonfictionForm').classList.remove('hidden');
    document.querySelector('#goback').classList.remove('hidden'); 
    document.querySelector('#fiction_button').classList.add('hidden');
    document.querySelector('#nonfiction_button').classList.add('hidden');
}

function hideForms() {
    if(document.querySelector('#fictionForm').classList.contains('hidden')){
        document.querySelector('#nonfictionForm').classList.add('hidden');
    } else {
        document.querySelector('#fictionForm').classList.add('hidden');
    }
    document.querySelector('#goback').classList.add('hidden');
    document.querySelector('#fiction_button').classList.remove('hidden');
    document.querySelector('#nonfiction_button').classList.remove('hidden');
}