
// Texto de animación de script y función

const texto = "console.log('Hello World'); print('Hello World') public class Main { public static void main(String[] args) { System.out.println(\"Hello World\"); } } #include <stdio.h>\nint main() { printf(\"Hello World\\n\"); return 0; } #include <iostream>\nusing namespace std;\nint main() { cout << \"Hello World\" << endl; return 0; } using System;\nclass Program { static void Main() { Console.WriteLine(\"Hello World\"); } } <?php echo 'Hello World'; ?> puts 'Hello World' package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Hello World\") } fn main() { println!(\"Hello World\"); } import Foundation\nprint(\"Hello World\") fun main() { println(\"Hello World\") } console.log('Hello World'); #!/bin/bash\necho \"Hello World\" <!DOCTYPE html>\n<html>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>console.log('Hello World'); print('Hello World') public class Main { public static void main(String[] args) { System.out.println(\"Hello World\"); } } #include <stdio.h>\nint main() { printf(\"Hello World\\n\"); return 0; } #include <iostream>\nusing namespace std;\nint main() { cout << \"Hello World\" << endl; return 0; } using System;\nclass Program { static void Main() { Console.WriteLine(\"Hello World\"); } } <?php echo 'Hello World'; ?> puts 'Hello World' package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Hello World\") } fn main() { println!(\"Hello World\"); } import Foundation\nprint(\"Hello World\") fun main() { println(\"Hello World\") } console.log('Hello World'); #!/bin/bash\necho \"Hello World\" <!DOCTYPE html>\n<html>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>";
let i = 0;
function animacionCodigoEscrito() {
    const codigo = document.getElementById("codigo")

    if (i < texto.length) {
        codigo.innerHTML += texto.charAt(i);
        i++;
        setTimeout(animacionCodigoEscrito, 7);
    }
    if (i == texto.length) {
        i = 0;
        codigo.innerHTML = "";
    }
}

animacionCodigoEscrito();