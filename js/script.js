
// Texto de animación de script y función

const texto = "console.log('Hello World'); print('Hello World') public class Main { public static void main(String[] args) { System.out.println(\"Hello World\"); } } #include <stdio.h>\nint main() { printf(\"Hello World\\n\"); return 0; } #include <iostream>\nusing namespace std;\nint main() { cout << \"Hello World\" << endl; return 0; } using System;\nclass Program { static void Main() { Console.WriteLine(\"Hello World\"); } } <?php echo 'Hello World'; ?> puts 'Hello World' package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Hello World\") } fn main() { println!(\"Hello World\"); } import Foundation\nprint(\"Hello World\") fun main() { println(\"Hello World\") } console.log('Hello World'); #!/bin/bash\necho \"Hello World\" <!DOCTYPE html>\n<html>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>console.log('Hello World'); print('Hello World') public class Main { public static void main(String[] args) { System.out.println(\"Hello World\"); } } #include <stdio.h>\nint main() { printf(\"Hello World\\n\"); return 0; } #include <iostream>\nusing namespace std;\nint main() { cout << \"Hello World\" << endl; return 0; } using System;\nclass Program { static void Main() { Console.WriteLine(\"Hello World\"); } } <?php echo 'Hello World'; ?> puts 'Hello World' package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Hello World\") } fn main() { println!(\"Hello World\"); } import Foundation\nprint(\"Hello World\") fun main() { println(\"Hello World\") } console.log('Hello World'); #!/bin/bash\necho \"Hello World\" <!DOCTYPE html>\n<html>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>";
let i = 200;
function animacionCodigoEscrito() {
    const codigo = document.getElementById("codigo")

    if (i == 200) {
        codigo.innerHTML = texto.slice(0, i);
    }

    if (i < texto.length) {
        codigo.innerHTML += texto.charAt(i);
        i++;
        setTimeout(animacionCodigoEscrito, 10);
    }
    if (i == texto.length) {
        i = 200;


    }
}

animacionCodigoEscrito();

// Texto de animación de contactos y función

const contactoCV = "Descargar CV";
const contactoCVId = "contactoCV";
const contactoGithub = "GitHub";
const contactoGithubId = "contactoGithub";
const contactoLinkedin = "Linkedin";
const contactoLinkedinId = "contactoLinkedin";
const lenguajesTitulo = "Lenguajes";
const lenguajesTituloId = "lenguajesTitulo";
const proyectosTitulo = "Proyectos";
const proyectosTituloId = "proyectosTitulo";
const sobreMiTitulo = "Sobre mí";
const sobreMiTituloId = "sobre-miTitulo";
const sobreMiImagen = "console.log('Hello World'); print('Hello World') public class Main { public static void main(String[] args) { System.out.println(\"Hello World\"); } } #include <stdio.h>\nint main() { printf(\"Hello World\\n\"); return 0; } #include <iostream>\nusing namespace std;\nint main() { cout << \"Hello World\" << endl; return 0; } using System;\nclass Program { static void Main() { Console.WriteLine(\"Hello World\"); } } <?php echo 'Hello World'; ?> puts 'Hello World' package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Hello World\") } fn main() { println!(\"Hello World\"); } import Foundation\nprint(\"Hello World\") fun main() { println(\"Hello World\") } console.log('Hello World'); #!/bin/bash\necho \"Hello World\" <!DOCTYPE html>\n<html>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>console.log('Hello World'); print('Hello World') public class Main { public static void main(String[] args) { System.out.println(\"Hello World\"); } } #include <stdio.h>\nint main() { printf(\"Hello World\\n\"); return 0; } #include <iostream>\nusing namespace std;\nint main() { cout << \"Hello World\" << endl; return 0; } using System;\nclass Program { static void Main() { Console.WriteLine(\"Hello World\"); } } <?php echo 'Hello World'; ?> puts 'Hello World' package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Hello World\") } fn main() { println!(\"Hello World\"); } import Foundation\nprint(\"Hello World\") fun main() { println(\"Hello World\") } console.log('Hello World'); #!/bin/bash\necho \"Hello World\" <!DOCTYPE html>\n<html>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>";
const sobreMiImagenId = "codigo-sobre-mi";
const nombreSobreMi = "Jairo";
const nombreSobreMiId = "nombre-sobre-mi";
const edadSobreMi = "28";
const edadSobreMiId = "edad-sobre-mi";
const formacionSobreMi = "DAW (cursando último curso), Ingeniería Eléctrica (Sin terminar, 2016-2022)";
const formacionSobreMiId = "formacion-sobre-mi";
const lenguajesSobreMi = "HTML, CSS, JavaScript, Java, MySQL, PHP";
const lenguajesSobreMiId = "lenguajes-sobre-mi";
const herramientasSobreMi = "VS Code, Google Antigravity, GitHub, Photoshop";
const herramientasSobreMiId = "herramientas-sobre-mi";
const aficcionesSobreMi = "Resolución de Cubos de Rubik, Tecnología, Ejercicio físico y disfrutar de la vida";
const aficcionesSobreMiId = "aficciones-sobre-mi";
const proyectoGithub = "GitHub oficial";
const proyectoGithubId = "proyecto-github";
const proyectoPortfolio = "Portfolio";
const proyectoPortfolioId = "proyecto-portfolio";
const proyectoBibliomagna = "Bibliomagna";
const proyectoBibliomagnaId = "proyecto-bibliomagna";
const proyectoCalculadora = "Calculadora Web";
const proyectoCalculadoraId = "proyecto-calculadora";

let j1 = 0;
let j2 = 0;
let j3 = 0;
let j4 = 0;
let j5 = 0;
let j6 = 0;
let j7 = 0;
let j8 = 0;
let j9 = 0;
let j10 = 0;
let j11 = 0;
let j12 = 0;
let j13 = 0;
let j14 = 0;
let j15 = 0;
let j16 = 0;

function animacionContactosEscrito(contactoDiv, id, j) {

    const contacto = document.getElementById(id)
    let delay = Math.floor(Math.random() * (450 - 10 + 1)) + 10;

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

animacionContactosEscrito(contactoCV, contactoCVId, j1);
animacionContactosEscrito(contactoGithub, contactoGithubId, j2);
animacionContactosEscrito(contactoLinkedin, contactoLinkedinId, j3);
animacionContactosEscrito(proyectosTitulo, proyectosTituloId, j4);
animacionContactosEscrito(sobreMiTitulo, sobreMiTituloId, j5);
animacionContactosEscrito(lenguajesTitulo, lenguajesTituloId, j6);
animacionContactosEscrito(nombreSobreMi, nombreSobreMiId, j7);
animacionContactosEscrito(edadSobreMi, edadSobreMiId, j8);
animacionContactosEscrito(formacionSobreMi, formacionSobreMiId, j9);
animacionContactosEscrito(lenguajesSobreMi, lenguajesSobreMiId, j10);
animacionContactosEscrito(herramientasSobreMi, herramientasSobreMiId, j11);
animacionContactosEscrito(aficcionesSobreMi, aficcionesSobreMiId, j12);

