
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/


//----------Funcion para recorrer la frase Encriptar-----------//

function recorrerFrase(frase) {

    var contador = 0;
    var fraseNueva = [];
    var fraseNuevaUnida = " ";
    
    while (contador <= frase.length){
        if (frase[contador] == "a") {
            
            fraseNueva[contador] = "ai";
            contador++;

        }else if ( frase[contador] == "e") {
            
            fraseNueva[contador] = "enter";
            contador++;

        }else if (frase[contador] == "i") {

            fraseNueva[contador] = "imes";
            contador++;

        }else if (frase[contador] == "o") {

            fraseNueva[contador] = "ober";
            contador++;

        }else if (frase[contador] == "u"){
            fraseNueva[contador] = "ufat";
            contador++;

        }else {

            fraseNueva[contador] = frase[contador];
            contador++;
        }

    }
    
    fraseNuevaUnida = fraseNueva.join('');
    return fraseNuevaUnida;
}
//---------------------------------------------------------//


//------------------Acción boton Encriptar-----------------//
var fraseIngresada = " ";

document.getElementById("btn-encriptar").onclick = function () {

fraseIngresada = document.getElementById("input-texto").value;

fraseNueva = recorrerFrase(fraseIngresada);

document.getElementById("msg").value = fraseNueva;
document.getElementById("input-texto").value = '';

console.log(fraseNueva);

event.preventDefault();
}
//----------------------------------------------------------//







/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//-----------------Funcion para Desencriptar------------------//

function desencriptar(frase) {
    
    contador = 0;

    while (contador<= frase.length){
        var fraseDesencriptada = " ";
        var fraseDesencriptada = frase.replace(/ai/ig, "a");
        var fraseDesencriptada = fraseDesencriptada.replace(/enter/ig, "e");
        var fraseDesencriptada = fraseDesencriptada.replace(/imes/ig, "i");
        var fraseDesencriptada = fraseDesencriptada.replace(/ober/ig, "o");
        var fraseDesencriptada = fraseDesencriptada.replace(/ufat/ig, "u");
        contador++;
    };



    return fraseDesencriptada;

    };

//------------------------------------------------------------//


//------------------Acción boton Desencriptar-----------------//

var fraseIngresada = [];

document.getElementById("btn-desencriptar").onclick = function () {

fraseIngresada = document.getElementById("input-texto").value;

fraseNueva = desencriptar(fraseIngresada);

document.getElementById("msg").value = fraseNueva;
document.getElementById("input-texto").value = '';

//console.log(fraseNueva);

event.preventDefault();
}
//------------------------------------------------------------//

//------------------Función Copiar texto----------------------//
function copiarTexto(){
    var textoAcopiar = document.getElementById("msg");
   // textoAcopiar.select();

    navigator.clipboard.writeText(textoAcopiar.value);
 
}

//------------------------------------------------------------//

//--------------------Acción boton Copiar---------------------//


document.getElementById("btn-copy").onclick = function () {

copiarTexto();

event.preventDefault();
}
//------------------------------------------------------------//