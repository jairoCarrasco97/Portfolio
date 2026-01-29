

const proyectoTitulo = "Proyectos";
const proyectoTituloId = "proyecto-titulo-escrito";
const proyectoGithub = "GitHub";
const proyectoGithubId = "proyecto-github";
const proyectoPortfolio = "Portfolio";
const proyectoPortfolioId = "proyecto-portfolio";
const proyectoBibliomagna = "Bibliomagna";
const proyectoBibliomagnaId = "proyecto-bibliomagna";
const proyectoCalculadora = "Calculadora";
const proyectoCalculadoraId = "proyecto-calculadora";

let j1 = 0;
let j2 = 0;
let j3 = 0;
let j4 = 0;
let j5 = 0;


function animacionContactosEscrito(contactoDiv, id, j) {

    const contacto = document.getElementById(id)
    let delay = Math.floor(Math.random() * (550 - 10 + 1)) + 10;

    if (j < contactoDiv.length) {

        let numAleatorio = Math.floor(Math.random() * (8 - 1));
        contacto.innerHTML = contactoDiv.substring(0, j);

        if (numAleatorio == 1) {
            contacto.innerHTML += contactoDiv.charAt(j + 1);
        }
        else {
            contacto.innerHTML += contactoDiv.charAt(j);
            j++;

        }
        setTimeout(animacionContactosEscrito, delay, contactoDiv, id, j);

    }
    else if (j == contactoDiv.length) {
        setTimeout(() => {
            animacionContactosBorrado(contactoDiv, id, j);
        }, 1000);
    }
}

function animacionEscritaError(contactoDiv, id, j) {
    j++
    contacto.innerHTML += contactoDiv.charAt(j);
    j--;
    setTimeout(animacionContactosEscrito, delay, contactoDiv, id, j);
    contacto.innerHTML = contactoDiv.substring(0, j);
    animacionContactosEscrito(contactoDiv, id, j);


}

function animacionContactosBorrado(contactoDiv, id, j) {
    const contacto = document.getElementById(id)
    let delay = Math.floor(Math.random() * (400 - 100 + 1)) + 10;
    if (j > 0) {
        contacto.innerHTML = contactoDiv.substring(0, j);
        j--;
        setTimeout(animacionContactosBorrado, delay, contactoDiv, id, j);
    }
    else if (j == 0) {
        setTimeout(() => {
            contacto.innerHTML = "";
            animacionContactosEscrito(contactoDiv, id, j);
        }, 500);
    }
}

animacionContactosEscrito(proyectoGithub, proyectoGithubId, j1);
animacionContactosEscrito(proyectoPortfolio, proyectoPortfolioId, j2);
animacionContactosEscrito(proyectoBibliomagna, proyectoBibliomagnaId, j3);
animacionContactosEscrito(proyectoCalculadora, proyectoCalculadoraId, j4);
animacionContactosEscrito(proyectoTitulo, proyectoTituloId, j4);