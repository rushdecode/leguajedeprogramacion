let numero = 28422016;

let contador =0;

let cociente = numero;
if (cociente !== 0)
{
    while ( cociente > 0){
        cociente = Math.floor(cociente /10);
        contador ++;
    }
}
else{
    contador = 1;
}

console.log(contador + 1);