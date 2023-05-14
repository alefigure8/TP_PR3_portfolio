/* Variables */
const btnRegresar = document.getElementById('btnRegresar');
const section_1 = document.getElementById('section_1');
const section_2 = document.getElementById('section_2');
const section_3 = document.getElementById('section_3');
const inicio = document.getElementById('inicio');
const proyecto = document.getElementById('proyecto');
const contacto = document.getElementById('contacto');
const cerrar = document.getElementById('cerrar');
const abrir = document.getElementById('abrir');
const card_1 = document.getElementById('card_1');
const card_2 = document.getElementById('card_2');
const card_3 = document.getElementById('card_3');
const card_4 = document.getElementById('card_4');
const card_5 = document.getElementById('card_5');
const card_6 = document.getElementById('card_6');
const footer = document.getElementById('footer');
const mostrar_mas = document.getElementById('mostrar_mas');

/*al iniciar*/
window.onload = () => {
    card_3.classList.add('hide');
    card_4.classList.add('hide');
    card_5.classList.add('hide');
    card_6.classList.add('hide');
}

/* Ir a cada seccion */
inicio.addEventListener('click', () => {
    window.scrollTo({ top: section_1.offsetTop - 50, behavior: 'smooth' });
})

proyecto.addEventListener('click', () => {
    window.scrollTo({ top: section_2.offsetTop - 50, behavior: 'smooth' });
})

contacto.addEventListener('click', () => {
    window.scrollTo({ top: section_3.offsetTop - 50, behavior: 'smooth' });
})

/* Regresar TOP*/
btnRegresar.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

/* Cerrar menu */
cerrar.addEventListener('click', () => {
    section_2.classList.add('hide');
    section_3.classList.add('hide');    
})

/* Seccion proyectos*/
abrir.addEventListener('click', () => {
    section_2.classList.remove('hide');
    section_3.classList.remove('hide');
})

mostrar_mas.addEventListener('click', () => {
    card_3.classList.toggle('hide');
    card_4.classList.toggle('hide');
    card_5.classList.toggle('hide');
    card_6.classList.toggle('hide');
    mostrar_mas.innerText = mostrar_mas.innerText == 'Mostrar más' ? 'Mostrar menos' : 'Mostrar más';
})

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (last_known_scroll_position > 80) {
        btnRegresar.classList.remove('hide');
    } else {
        btnRegresar.classList.add('hide');
    }
  });