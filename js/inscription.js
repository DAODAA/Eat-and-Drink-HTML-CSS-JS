//Creation d'une fonction regulant le bouton condition d'utilisation
let nbClic = 0;
let bloc = document.getElementById('blocCondition');
bloc.addEventListener('click', (nbClic, btn) => {
    nbClic = nbClic + 1;
    btn = document.getElementById('btnCondition');
    btn.style.color = 'red';
    if (nbClic % 2 == 0) {
        btn.style.color = 'black';
    }
});