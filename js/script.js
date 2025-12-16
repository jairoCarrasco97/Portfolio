
// Texto de animación de script y función

const texto = "console.log('Hello World'); print('Hello World') public class Main { public static void main(String[] args) { System.out.println(\"Hello World\"); } } #include <stdio.h>\nint main() { printf(\"Hello World\\n\"); return 0; } #include <iostream>\nusing namespace std;\nint main() { cout << \"Hello World\" << endl; return 0; } using System;\nclass Program { static void Main() { Console.WriteLine(\"Hello World\"); } } <?php echo 'Hello World'; ?> puts 'Hello World' package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Hello World\") } fn main() { println!(\"Hello World\"); } import Foundation\nprint(\"Hello World\") fun main() { println(\"Hello World\") } console.log('Hello World'); #!/bin/bash\necho \"Hello World\" <!DOCTYPE html>\n<html>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>console.log('Hello World'); print('Hello World') public class Main { public static void main(String[] args) { System.out.println(\"Hello World\"); } } #include <stdio.h>\nint main() { printf(\"Hello World\\n\"); return 0; } #include <iostream>\nusing namespace std;\nint main() { cout << \"Hello World\" << endl; return 0; } using System;\nclass Program { static void Main() { Console.WriteLine(\"Hello World\"); } } <?php echo 'Hello World'; ?> puts 'Hello World' package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Hello World\") } fn main() { println!(\"Hello World\"); } import Foundation\nprint(\"Hello World\") fun main() { println(\"Hello World\") } console.log('Hello World'); #!/bin/bash\necho \"Hello World\" <!DOCTYPE html>\n<html>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>";
let i = 0;
function animacionCodigoEscrito() {
    const codigo = document.getElementById("codigo")

    if (i < texto.length) {
        codigo.innerHTML += texto.charAt(i);
        i++;
        setTimeout(animacionCodigoEscrito, 20);
    }
    if (i == texto.length) {
        i = 0;
        codigo.innerHTML = "";


    }
}

animacionCodigoEscrito();

// Texto de animación de contactos y función

const contactoGmail = "jairocarrasco97.dev";
const contactoGithub = "jairoCarrasco97";
const contactoWhatsapp = "+34 622 87 75 70";
const contactoGmailId = "contactoGmail";
const contactoGithubId = "contactoGithub";
const contactoWhatsappId = "contactoWhatsapp";

let j1 = 0;
let j2 = 0;
let j3 = 0;
function animacionContactosEscrito(contactoDiv, id, j) {
    const contacto = document.getElementById(id)

    if (j < contactoDiv.length) {
        contacto.innerHTML += contactoDiv.charAt(j);
        j++;
        setTimeout(animacionContactosEscrito, 150, contactoDiv, id, j);
    }
    else if (j == contactoDiv.length) {
        setTimeout(() => {
            animacionContactosBorrado(contactoDiv, id, j);
        }, 1000);
    }
}

function animacionContactosBorrado(contactoDiv, id, j) {
    const contacto = document.getElementById(id)

    if (j > 0) {
        contacto.innerHTML = contactoDiv.substring(0, j);
        j--;
        setTimeout(animacionContactosBorrado, 50, contactoDiv, id, j);
    }
    else if (j == 0) {
        setTimeout(() => {
            contacto.innerHTML = "";
            animacionContactosEscrito(contactoDiv, id, j);
        }, 500);
    }
}

animacionContactosEscrito(contactoGmail, contactoGmailId, j1);
animacionContactosEscrito(contactoGithub, contactoGithubId, j2);
animacionContactosEscrito(contactoWhatsapp, contactoWhatsappId, j3);
