 let validation = document.getElementById('btn_envoi');
 let email = document.getElementById('mail');
 let emailManquant = document.getElementById('mail_manquant');
 validation.addEventListener('click', f_valid);

 function f_valid(e) {
     if (email.validity.valueMissing) {
         e.preventDefault();
         emailManquant.textContent = 'Mail manquant';
         emailManquant.style.color = 'red';
     }
 }