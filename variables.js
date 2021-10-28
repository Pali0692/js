
const user = prompt("¿Cuál es tu nombre?")
const remu = Number(prompt("Hola" + " "+ user + " " +"¿Cuál es tu remuneración?"));

if (user == "Marcelo") {
    console.log("Hola Profe");
} else{
    console.log("Hola"+ " " + user)
}

if (remu <= 150000) {
    alert("No tenes que pagar Impuesto a las Ganancias");
} else if (remu <= 173000) {
    alert("Tenes que pagar Impuesto a las Ganancias, pero tenes beneficios");
} else {
    alert("Tenes que pagar Impuesto a las Ganancias");
}

