let frase = "Hello World";

let indice = 0;
let res = "";

while (indice < frase.length) {
    
    if (frase[indice]===" "){
        console.log("encontre espacio");
        break;
    }
    res = res.concat(frase[indice]);
    indice ++;
}

console.log(res);