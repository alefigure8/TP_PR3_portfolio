/* Variables */
const btnRegresar = document.getElementById('btnRegresar');
const section_1 = document.getElementById('1');
const section_2 = document.getElementById('2');
const section_3 = document.getElementById('3');
const inicio = document.getElementById('inicio');
const proyecto = document.getElementById('proyecto');
const contacto = document.getElementById('contacto');

/* Ir a cada seccion */
inicio.addEventListener('click', () => {
    window.scrollTo({ top: section_1.offsetTop - 70, behavior: 'smooth' });
})

proyecto.addEventListener('click', () => {
    window.scrollTo({ top: section_2.offsetTop - 70, behavior: 'smooth' });
})

contacto.addEventListener('click', () => {
    window.scrollTo({ top: section_3.offsetTop, behavior: 'smooth' });
})

/* Regresar TOP*/
btnRegresar.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})