//Prendo gli elementi che servono

const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');
const modalButton = document.querySelector('.modal-button');

/*----------------
 Eventi dinamici
 -----------------*/

//rendere cliccabili i box (gli album)
const boxes = document.querySelectorAll('.album');
for (let i = 0; i < boxes.length; i++) {
    //prendo ad ogni giro il box corrente
    const box = boxes[i];

    //rendo cliccabile il box
    box.addEventListener('click', function () {

        //riempire la modale
        insertModalContent(i);
        //apri la modale
        openModal();
    })
}

//rendo cliccabile il bottone x
modalButton.addEventListener('click', function () {
    closeModal();
});



/*-------------------
Funzioni
-------------------*/
//funzione per aprire la modale
function openModal() {
    modal.classList.remove('modal-hidden');
}
//funzione per chiudere la modale
function closeModal() {
    modal.classList.add('modal-hidden');
}
//funzione per riempire la modale
function insertModalContent(i) {
    const surprice= source[i];
    modalContent.innerHTML = `
    <iframe style="border-radius:12px" src=${surprice.src} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
}


