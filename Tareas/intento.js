// Texto que esta encriptado
const encriptado = "^[()~^*/?[()^+-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()¬^()[{=()?+^[]=?()^{()*¡[$[{()¡[()?=[]\\¬]()¿()[{;+[$__~()]=]+~";

// sustituciones 
const sustituciones = {
    "(": " ",  //espacio en blanco
    "?": "a",
    "[": "e",
    "/": "i",
    "~": "o",
    "+": "u",
    "¬": "ó",
    "^": "b",
    "*": "c",
    "]": "l",
    "%": "t",
    "\\": "i",
    "{": "p",
    "}": "q",
    ";": "r",
    "_": "s",
    "!": "v",
    "¿": "l",
    "¡": "m",
    "#": "d",
    "$": "f",
    "=": "" 
};

// Función
function desencriptar(texto) {
    let desencriptado = "";
    for (let char of texto) {
        desencriptado += sustituciones[char] !== undefined ? sustituciones[char] : char;
    }
    return desencriptado;
}

const mensajeDesencriptado = desencriptar(encriptado);
console.log(mensajeDesencriptado);