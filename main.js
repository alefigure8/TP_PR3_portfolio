const apiUrl = "./data/proyectos.json";
let jsondata;

async function getJson(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

async function main() {
  jsondata = await getJson(apiUrl);

  /* Variables Secciones*/
  const section_1 = document.getElementById("section_1");
  const section_2 = document.getElementById("section_2");
  const section_3 = document.getElementById("section_3");
  const inicio = document.getElementById("inicio");
  const proyecto = document.getElementById("proyecto");
  const contacto = document.getElementById("contacto");

  /* Variable botones*/
  const btnRegresar = document.getElementById("btnRegresar");
  const mostrar_mas = document.getElementById("mostrar_mas");
  const cerrar = document.getElementById("cerrar");
  const abrir = document.getElementById("abrir");

  /* Variables card */
  const cardsBody = document.getElementById("cards");
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

  const titulo_1 = document.getElementById("titulo_1");
  const titulo_2 = document.getElementById("titulo_2");
  const titulo_3 = document.getElementById("titulo_3");
  const titulo_4 = document.getElementById("titulo_4");
  const titulo_5 = document.getElementById("titulo_5");
  const titulo_6 = document.getElementById("titulo_6");

  const categoria_1 = document.getElementById("categoria_1");
  const categoria_2 = document.getElementById("categoria_2");
  const categoria_3 = document.getElementById("categoria_3");
  const categoria_4 = document.getElementById("categoria_4");
  const categoria_5 = document.getElementById("categoria_5");
  const categoria_6 = document.getElementById("categoria_6");

  const screen_placeholder_1 = document.getElementById("screen_placeholder_1");

  const abrir_screen_1 = document.getElementById("abrir_screen_1");
  const abrir_screen_2 = document.getElementById("abrir_screen_2");
  const abrir_screen_3 = document.getElementById("abrir_screen_3");
  const abrir_screen_4 = document.getElementById("abrir_screen_4");
  const abrir_screen_5 = document.getElementById("abrir_screen_5");
  const abrir_screen_6 = document.getElementById("abrir_screen_6");

  const card_body_container_1 = document.getElementById(
    "card_body_container_1"
  );
  const card_body_container_2 = document.getElementById(
    "card_body_container_2"
  );
  const card_body_container_3 = document.getElementById(
    "card_body_container_3"
  );
  const card_body_container_4 = document.getElementById(
    "card_body_container_4"
  );
  const card_body_container_5 = document.getElementById(
    "card_body_container_5"
  );
  const card_body_container_6 = document.getElementById(
    "card_body_container_6"
  );

  const titulos = [
    titulo_1,
    titulo_2,
    titulo_3,
    titulo_4,
    titulo_5,
    titulo_6,
  ];

  const cards_body_container = [
    card_body_container_1,
    card_body_container_2,
    card_body_container_3,
    card_body_container_4,
    card_body_container_5,
    card_body_container_6,
  ];

  const textos = [texto_1, texto_2, texto_3, texto_4, texto_5, texto_6];

  const cards = [card_1, card_2, card_3, card_4, card_5, card_6];

  const categorias = [
    categoria_1,
    categoria_2,
    categoria_3,
    categoria_4,
    categoria_5,
    categoria_6,
  ];

  const card_bars = [
    card_bar_1,
    card_bar_2,
    card_bar_3,
    card_bar_4,
    card_bar_5,
    card_bar_6,
  ];

  const images = [image_1, image_2, image_3, image_4, image_5, image_6];

  const screen_cards = [
    abrir_screen_1,
    abrir_screen_2,
    abrir_screen_3,
    abrir_screen_4,
    abrir_screen_5,
    abrir_screen_6,
  ];

  /* Cargar info de cards cerrados*/
  for (let i = 0; i < jsondata.length; i++) {
    images[i].style.backgroundImage = `url(${jsondata[i].portada})`;
    textos[i].innerText = jsondata[i].texto.substring(0, 100) + "...";
    categorias[i].innerText = jsondata[i].categoria;
    titulos[i].innerText = jsondata[i].titulo;
  }

  /* Esconder cards */
  card_3.classList.add("hide");
  card_4.classList.add("hide");
  card_5.classList.add("hide");
  card_6.classList.add("hide");

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
    image_2.classList.add("image_screen_color");
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
    cargarDataEntrada(0);
    screen_bool = !screen_bool;
  });

  abrir_screen_2.addEventListener("click", () => {
    screen(screen_placeholder_2, card_2, image_2, abrir_screen_2);
    cargarDataEntrada(1);
    screen_bool = !screen_bool;
  });

  abrir_screen_3.addEventListener("click", () => {
    screen(screen_placeholder_3, card_3, image_3, abrir_screen_3);
    cargarDataEntrada(2);
    screen_bool = !screen_bool;
  });

  abrir_screen_4.addEventListener("click", () => {
    screen(screen_placeholder_4, card_4, image_4, abrir_screen_4);
    cargarDataEntrada(3);
    screen_bool = !screen_bool;
  });

  abrir_screen_5.addEventListener("click", () => {
    screen(screen_placeholder_5, card_5, image_5, abrir_screen_5);
    cargarDataEntrada(4);
    screen_bool = !screen_bool;
  });

  abrir_screen_6.addEventListener("click", () => {
    screen(screen_placeholder_6, card_6, image_6, abrir_screen_6);
    cargarDataEntrada(5);
    screen_bool = !screen_bool;
  });

  /* Abrir y Cerrar screen */
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

  /* Cargar data de entrada */
  function cargarDataEntrada(id){
    if (screen_bool) {
      cards_body_container[id].innerHTML = "";
      cards_body_container[id].innerHTML += `<p class="titulo_4" id="titulo_1">${jsondata[id].titulo}</p>`;
      cards_body_container[id].innerHTML += `<p class="card_body_container_text">${jsondata[id].texto}</p>`;
      cards_body_container[id].innerHTML += `<img src=\"${jsondata[id].imagenes[0]}" class="imagen_entrada">`;
      cards_body_container[id].innerHTML += `<div class="card_body_container_links"><a class="btn btn_screen" href="${jsondata[id].link}" target="_blank" class="link">Ver proyecto</a>;
    </div>`;
    } else {
      cards_body_container[id].innerText = "";
      cards_body_container[id].innerHTML += `<p class="titulo_4" id="titulo_1">${jsondata[id].titulo}</p>`;
      cards_body_container[id].innerHTML += `<p class="card_body_container_text">${jsondata[id].texto.substring( 0, 100 )}...</p>`;
      cards_body_container[id].innerHTML += `<div class="card_body_container_links"><a class="btn btn_screen" href="#" class="link">Ampliar</a>;`
   }
  }


}

main();
