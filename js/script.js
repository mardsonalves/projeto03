const buttons = document.querySelectorAll('.btn-question');

for (const button of buttons){
    button.addEventListener('click', () => {
        const texto = button.nextElementSibling; 
        const icon = button.querySelector('img');
        
        const textOculto = texto.style.display === 'none';
        
        texto.style.display = textOculto ? 'block' : 'none';
        icon.src = textOculto ? '/assets/images/icon-minus.svg' : '/assets/images/icon-plus.svg';
        icon.alt = textOculto ? 'Icone Menos' : 'Icone Mais';
    });
}
