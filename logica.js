let numero = 2;
let numero2 = 2;
let simbolo = "multiplicação";
let resultado

switch(simbolo){
    case "+":
    resultado = numero + numero2;
    break;

    case "-":
    resultado = numero - numero2;
    break;

    case "/":
    resultado = numero / numero2;
    break;

    case "*":
    resultado = numero * numero2;
    break;

    default:
    console.log("Use apenas operadores aritméticos")
}

console.log(resultado)