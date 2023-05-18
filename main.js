const apiUrl = "./data/proyectos.json";

/* Traer datos desde json */
async function getJson(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

/* Crear cada card dependiendo el json */
async function crearCards(jsondata) {
  const cardsBody = document.getElementById("cards");

  for (let i = 0; i < jsondata.length; i++) {
    cardsBody.innerHTML += `
        <div id="screen_placeholder_${i + 1}" class="screen_placeholder">
            <div class="card sombra" id="card_${i + 1}">
                <div class="card_bar" id="card_bar_${i + 1}">
                    <div class="circulos_screen">
                        <div class="circulo_blanco_screen"></div>
                        <div class="circulo_blanco_screen"></div>
                    </div>
                    <p class="titulo_3">${jsondata[i].categoria}</p>
                    <div class="cruz">
                        <i
                        class="fas fa-external-link-alt icon_screen"
                        id="abrir_screen_${i + 1}"
                        ></i>
                    </div>
                    </div>
                    <div class="card_body">
                    <div
                        class="image_screen_${i + 1} image_screen_container"
                        id="image_${i + 1}"
                    ></div>
                    <div class="card_body_container" id="card_body_container_${
                      i + 1
                    }">
                        <p class="titulo_4">${jsondata[i].titulo}</p>
                        <p class="parrafo_2">
                        ${jsondata[i].texto.substring(0, 100)}...
                        </p>
                        <div class="card_body_container_links">
                        <a class="btn btn_screen" class="link"
                            id="ampliar_${i + 1}">Ampliar</a
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}

async function main() {
  /* Llamamos los datos del json*/
  const jsondata = await getJson(apiUrl);

  /* Creamos cada una de las cards*/
  await crearCards(jsondata);

  /* Variables Secciones*/
  const section_1 = document.getElementById("section_1");
  const section_2 = document.getElementById("section_2");
  const section_3 = document.getElementById("section_3");
  const inicio = document.getElementById("inicio");
  const proyecto = document.getElementById("proyecto");
  const contacto = document.getElementById("contacto");

  /* Variables Formulario */
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  const modal_error = document.getElementById("modal_error");
  const icon_screen_error = document.getElementById("icon_screen_error");

  const errors = [];
  for (let i = 0; i < 3; i++) {
    errors.push(document.getElementById(`error_${i + 1}`));
  }

  /* Variable botones*/
  const btnRegresar = document.getElementById("btnRegresar");
  const mostrar_mas = document.getElementById("mostrar_mas");
  const cerrar = document.getElementById("cerrar");
  const abrir = document.getElementById("abrir");
  const icon_screen = document.getElementById("icon_screen");
  const version = document.getElementById("version");
  const abrir_version = document.getElementById("abrir_version");
  const icon_screen_sobre_mi = document.getElementById("icon_screen_sobre_mi");
  const version_sobre_mi = document.getElementById("version_sobre_mi");
  const btn_sobre_mi = document.getElementById("btn_sobre_mi");
  const btn_formulario = document.getElementById("btn_formulario");

  /* Listar id card */
  const cards = [];
  for (let i = 0; i < jsondata.length; i++) {
    cards.push(document.getElementById(`card_${i + 1}`));

    cards[i].addEventListener("click", () => {
      card_bars[i].classList.add("card_bar_selected");
      images[i].classList.add("image_screen_color");
      cardBar(card_bars[i]);
      image(images[i]);
    });
  }

  /* Listar id card_bar */
  const card_bars = [];
  for (let i = 0; i < jsondata.length; i++) {
    card_bars.push(document.getElementById(`card_bar_${i + 1}`));
  }

  /* Listar id image */
  const images = [];
  for (let i = 0; i < jsondata.length; i++) {
    images.push(document.getElementById(`image_${i + 1}`));
  }

  const screen_placeholders = [];
  /* Listar id screen_placeholder */
  for (let i = 0; i < jsondata.length; i++) {
    const screen_placeholder = document.getElementById(
      `screen_placeholder_${i + 1}`
    );
    screen_placeholders.push(screen_placeholder);
  }

  /* Listar id card_body_container */
  const cards_body_container = [];
  for (let i = 0; i < jsondata.length; i++) {
    cards_body_container.push(
      document.getElementById(`card_body_container_${i + 1}`)
    );
  }

  /* Variable para abrir y cerrar screens*/
  let screen_bool = true;

  /* Listar id abrir_screen */
  const abrir_screens = [];
  for (let i = 0; i < jsondata.length; i++) {
    abrir_screens.push(document.getElementById(`abrir_screen_${i + 1}`));

    /* Crear evento */
    abrir_screens[i].addEventListener("click", () => {
      screen(screen_placeholders[i], cards[i], images[i], abrir_screens[i]);
      cargarDataEntrada(i);
      screen_bool = !screen_bool;
    });
  }

  /* Listar id btn_screen */
  let btn_screens = [];
  for (let i = 0; i < jsondata.length; i++) {
    btn_screens.push(document.getElementById(`ampliar_${i + 1}`));

    /* Crear evento */
    btn_screens[i].addEventListener("click", () => {
      screen(screen_placeholders[i], cards[i], images[i], abrir_screens[i]);
      cargarDataEntrada(i);
      screen_bool = !screen_bool;
    });
  }

  /* Regenerar evento de la ventana cerrada*/ 
  function crearEventos(i) {
    const newBtn = document.getElementById(`ampliar_${i}`);
    btn_screens = btn_screens.filter((btn) => btn.id != newBtn.id);
    btn_screens.push(newBtn);
    btn_screens.sort((a, b) => a.id.split("_")[1] - b.id.split("_")[1]);

    /* Crear evento */
    btn_screens[i - 1].addEventListener("click", () => {
      screen(
        screen_placeholders[i - 1],
        cards[i - 1],
        images[i - 1],
        abrir_screens[i - 1]
      );
      cargarDataEntrada(i - 1);
      screen_bool = !screen_bool;
    });
  }

  /* Agregar portadas*/
  for (let i = 0; i < jsondata.length; i++) {
    images[i].style.backgroundImage = `url(${jsondata[i].portada})`;
  }

  /* Esconder cards */
  for (let i = 4; i < cards.length; i++) {
    cards[i].classList.add("hide");
  }

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
    for (let i = 4; i < jsondata.length; i++) {
      cards[i].classList.toggle("hide");
    }
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

  /* Funcion para coloreas barra de ventana */
  function cardBar(card_bar) {
    const filter_cards = card_bars.filter((x) => card_bar != x);
    filter_cards.forEach((x) => x.classList.remove("card_bar_selected"));
  }

  /* Funcion para sacar filtro*/
  function image(image) {
    const filter_image = images.filter((x) => image != x);
    filter_image.forEach((x) => {
      x.classList.remove("image_screen_color");
    });
  }

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
  function cargarDataEntrada(id) {
    if (screen_bool) {
      card_bars[id].classList.add("card_bar_resize");
      cards_body_container[id].innerHTML = "";
      cards_body_container[
        id
      ].innerHTML += `<p class="titulo_4">${jsondata[id].titulo}</p>`;
      cards_body_container[
        id
      ].innerHTML += `<p class="card_body_container_text">${jsondata[id].texto}</p>`;
      cards_body_container[
        id
      ].innerHTML += `<img src=\"${jsondata[id].imagenes[0]}" class="imagen_entrada">`;
      cards_body_container[
        id
      ].innerHTML += `<img src=\"${jsondata[id].imagenes[1]}" class="imagen_entrada">`;
      cards_body_container[
        id
      ].innerHTML += `<img src=\"${jsondata[id].imagenes[2]}" class="imagen_entrada">`;
      cards_body_container[
        id
      ].innerHTML += `<div class="card_body_container_links"><a class="btn btn_screen link" href="${jsondata[id].link}" target="_blank">Ver proyecto</a></div>`;
    } else {
      card_bars[id].classList.remove("card_bar_resize");
      cards_body_container[id].innerText = "";
      cards_body_container[
        id
      ].innerHTML += `<p class="titulo_4">${jsondata[id].titulo}</p>`;
      cards_body_container[
        id
      ].innerHTML += `<p class="card_body_container_text">${jsondata[
        id
      ].texto.substring(0, 100)}...</p>`;
      cards_body_container[
        id
      ].innerHTML += `<div class="card_body_container_links"><a class="btn btn_screen link" id="ampliar_${
        id + 1
      }">Ampliar</a></div>`;

      crearEventos(jsondata[id].id);
    }
  }

  /* Eventos ventana version */
  icon_screen.addEventListener("click", () => {
    version.classList.add("hide");
  });

  abrir_version.addEventListener("click", () => {
    version.classList.remove("hide");
  });

  /* Eventos ventana version */
  icon_screen_sobre_mi.addEventListener("click", () => {
    version_sobre_mi.classList.add("hide");
  });

  btn_sobre_mi.addEventListener("click", () => {
    version_sobre_mi.classList.remove("hide");
  });

  /* Eventos formilario */
  nombre.addEventListener("focusout", () => {
    error(nombre, 0);
  });

  email.addEventListener("focusout", () => {
    errors[1].innerHTML =
      '<i class="fa-solid fa-exclamation"></i>Todos los campos son obligatorios</p></div>';
    error(email, 1);

    if (email.value.length > 0) {
      if (validarMail(email.value)) {
        errors[1].classList.add("hide");
      } else {
        errors[1].classList.remove("hide");
        errors[1].innerHTML =
          '<i class="fa-solid fa-exclamation"></i>No es un Email valirdo</p></div>';
      }
    }
  });

  mensaje.addEventListener("focusout", () => {
    error(mensaje, 2);
  });

  btn_formulario.addEventListener("click", () => {
    if (
      nombre.classList.contains("hide") &&
      email.classList.contains("hide") &&
      mensaje.classList.contains("hide")
    ) {
      alert("Mensaje enviado correctamente");
    } else {
      modal_error.classList.remove("hide");
    }
  });

  icon_screen_error.addEventListener("click", () => {
    modal_error.classList.add("hide");
  });

  function error(input, i) {
    if (input.value.length > 0) {
      errors[i].classList.add("hide");
    }

    if (input.value.length == 0) {
      errors[i].classList.remove("hide");
    }
  }

  function validarMail(mail) {
    let reg = /\S+@\S+\.\S+/;
    return reg.test(mail);
  }
}

main();
