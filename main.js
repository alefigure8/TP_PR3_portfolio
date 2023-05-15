/* Variables Secciones*/
const section_1 = document.getElementById("section_1");
const section_2 = document.getElementById("section_2");
const section_3 = document.getElementById("section_3");
const inicio = document.getElementById("inicio");
const proyecto = document.getElementById("proyecto");
const contacto = document.getElementById("contacto");

/* Variables card */
const card_1 = document.getElementById("card_1");
const card_2 = document.getElementById("card_2");
const card_3 = document.getElementById("card_3");
const card_4 = document.getElementById("card_4");
const card_5 = document.getElementById("card_5");
const card_6 = document.getElementById("card_6");
const footer = document.getElementById("footer");

const card_bar_1 = document.getElementById("card_bar_1");
const card_bar_2 = document.getElementById("card_bar_2");
const card_bar_3 = document.getElementById("card_bar_3");
const card_bar_4 = document.getElementById("card_bar_4");
const card_bar_5 = document.getElementById("card_bar_5");
const card_bar_6 = document.getElementById("card_bar_6");

const image_1 = document.getElementById("image_1");
const image_2 = document.getElementById("image_2");
const image_3 = document.getElementById("image_3");
const image_4 = document.getElementById("image_4");
const image_5 = document.getElementById("image_5");
const image_6 = document.getElementById("image_6");

const texto_1 = document.getElementById("texto_1");
const texto_2 = document.getElementById("texto_2");
const texto_3 = document.getElementById("texto_3");
const texto_4 = document.getElementById("texto_4");
const texto_5 = document.getElementById("texto_5");
const texto_6 = document.getElementById("texto_6");

const screen_placeholder_1 = document.getElementById("screen_placeholder_1");

const cards = [card_1, card_2, card_3, card_4, card_5, card_6];
const card_bars = [
  card_bar_1,
  card_bar_2,
  card_bar_3,
  card_bar_4,
  card_bar_5,
  card_bar_6,
];
const images = [image_1, image_2, image_3, image_4, image_5, image_6];

/* Variable botones*/
const btnRegresar = document.getElementById("btnRegresar");
const mostrar_mas = document.getElementById("mostrar_mas");
const cerrar = document.getElementById("cerrar");
const abrir = document.getElementById("abrir");

const abrir_screen_1 = document.getElementById("abrir_screen_1");
const abrir_screen_2 = document.getElementById("abrir_screen_2");
const abrir_screen_3 = document.getElementById("abrir_screen_3");
const abrir_screen_4 = document.getElementById("abrir_screen_4");
const abrir_screen_5 = document.getElementById("abrir_screen_5");
const abrir_screen_6 = document.getElementById("abrir_screen_6");

const screen_cards = [
  abrir_screen_1,
  abrir_screen_2,
  abrir_screen_3,
  abrir_screen_4,
  abrir_screen_5,
  abrir_screen_6,
];

/*al iniciar*/
window.onload = () => {
  card_3.classList.add("hide");
  card_4.classList.add("hide");
  card_5.classList.add("hide");
  card_6.classList.add("hide");
};

/* Ir a cada seccion */
inicio.addEventListener("click", () => {
  window.scrollTo({ top: section_1.offsetTop - 50, behavior: "smooth" });
});

proyecto.addEventListener("click", () => {
  window.scrollTo({ top: section_2.offsetTop - 50, behavior: "smooth" });
});

contacto.addEventListener("click", () => {
  window.scrollTo({ top: section_3.offsetTop - 50, behavior: "smooth" });
});

/* Regresar TOP*/
btnRegresar.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Cerrar menu */
cerrar.addEventListener("click", () => {
  section_2.classList.add("hide");
  section_3.classList.add("hide");
});

/* Seccion proyectos*/
abrir.addEventListener("click", () => {
  section_2.classList.remove("hide");
  section_3.classList.remove("hide");
});

mostrar_mas.addEventListener("click", () => {
  card_3.classList.toggle("hide");
  card_4.classList.toggle("hide");
  card_5.classList.toggle("hide");
  card_6.classList.toggle("hide");
  mostrar_mas.innerText =
    mostrar_mas.innerText == "Mostrar más" ? "Mostrar menos" : "Mostrar más";
});

/* Mostrar boton regresar */
window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;
  if (last_known_scroll_position > 80) {
    btnRegresar.classList.remove("hide");
  } else {
    btnRegresar.classList.add("hide");
  }
});

/* Selected Card */
card_1.addEventListener("click", () => {
  card_bar_1.classList.add("card_bar_selected");
  image_1.classList.add("image_screen_color");
  cardBar(card_bar_1);
  image(image_1);
});

card_2.addEventListener("click", () => {
  card_bar_2.classList.add("card_bar_selected");
  image_2.classList.add("image_screen_colimage_height");
  cardBar(card_bar_2);
  image(image_2);
});

card_3.addEventListener("click", () => {
  card_bar_3.classList.add("card_bar_selected");
  image_3.classList.add("image_screen_color");
  cardBar(card_bar_3);
  image(image_3);
});

card_4.addEventListener("click", () => {
  card_bar_4.classList.add("card_bar_selected");
  image_4.classList.add("image_screen_color");
  cardBar(card_bar_4);
  image(image_4);
});

card_5.addEventListener("click", () => {
  card_bar_5.classList.add("card_bar_selected");
  image_5.classList.add("image_screen_color");
  cardBar(card_bar_5);
  image(image_5);
});

card_6.addEventListener("click", () => {
  card_bar_6.classList.add("card_bar_selected");
  image_6.classList.add("image_screen_color");
  cardBar(card_bar_6);
  image(image_6);
});

function cardBar(card_bar) {
  const filter_cards = card_bars.filter((x) => card_bar != x);
  filter_cards.forEach((x) => x.classList.remove("card_bar_selected"));
}

function image(image) {
  const filter_image = images.filter((x) => image != x);
  filter_image.forEach((x) => {
    x.classList.remove("image_screen_color");
  });
}

let screen_bool = true;

/* Abrir screen */
abrir_screen_1.addEventListener("click", () => {
  screen(screen_placeholder_1, card_1, image_1, abrir_screen_1);

  if(screen_bool){
    texto_1.innerText =
    " Pellentesque interdum felis nunc, a aliquet odio dignissim sit amet. Proin libero nisl, lobortis quis sapien ut, egestas vulputate risus. Nullam mattis porta augue in tempus. Aenean nec erat sapien. Morbi at ex vitae nisl pharetra tincidunt. Integer porttitor condimentum nisl, nec laoreet est mattis varius. Aenean interdum, est non efficitur vehicula, quam ipsum volutpat sapien, nec finibus sem quam lacinia erat. Suspendisse at libero eget nunc pellentesque bibendum ut at erat. Donec luctus risus vitae risus porta placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut magna neque, scelerisque eget arcu ut, ornare rutrum nunc. Aliquam sodales elementum efficitur. Sed et lorem quis est sagittis pharetra eu sed arcu. Etiam vestibulum, enim et condimentum consequat, eros elit mattis nunc, et consectetur justo magna eu lacus. Phasellus malesuada hendrerit vehicula. Donec consectetur tellus vel sapien congue, quis viverra dui luctus. Aliquam id pretium odio. Praesent aliquet diam id magna elementum aliquam. Sed mollis diam id consequat ultrices. In consequat justo eget arcu ultricies finibus. Vestibulum ut lacus ex. ";
  }else{
    texto_1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
  }
  screen_bool = !screen_bool;
});

abrir_screen_2.addEventListener("click", () => {
  screen(screen_placeholder_2, card_2, image_2, abrir_screen_2);
  screen_bool = !screen_bool;
});

abrir_screen_3.addEventListener("click", () => {
  screen(screen_placeholder_3, card_3, image_3, abrir_screen_3);
  screen_bool = !screen_bool;
});

abrir_screen_4.addEventListener("click", () => {
  screen(screen_placeholder_4, card_4, image_4, abrir_screen_4);
  screen_bool = !screen_bool;
});

abrir_screen_5.addEventListener("click", () => {
  screen(screen_placeholder_5, card_5, image_5, abrir_screen_5);
  screen_bool = !screen_bool;
});

abrir_screen_6.addEventListener("click", () => {
  screen(screen_placeholder_6, card_6, image_6, abrir_screen_6);
  screen_bool = !screen_bool;
});

function screen(screen_placeholder, card, image, abrir_screen) {
  if (screen_bool) {
    screen_placeholder.classList.add("card_placeholder");
    card.classList.add("screen_absolute");
    image.classList.add("img_screen_absolute");
    abrir_screen.classList.remove("fa-external-link-alt");
    abrir_screen.classList.add("fa-times");
  } else {
    screen_placeholder.classList.remove("card_placeholder");
    card.classList.remove("screen_absolute");
    image.classList.remove("img_screen_absolute");
    abrir_screen.classList.remove("fa-times");
    abrir_screen.classList.add("fa-external-link-alt");
  }
}
