// Programa para jugar Tic-Tac_toe en JavaScript

// Primero se crean las siguientes funciones para el juego

// Funcion para asignar valor en la posicion dada
function asignarValorenPosicion(arr,pos,valor){
    let cont = 0;
    for (let i = 0; i < arr.length; i++){
        for(let j=0;j < arr[i].length; j++){
            cont += 1;
            if (cont == pos){

                if (arr[i][j] != 'X' && arr[i][j] != 'O'){
                    arr[i][j] = valor;
                    return [arr,true];
                }
                else {
                    //console.log('Posicion ocupada');
                    return [arr,false];
                }  
            }
        }
    }      
}

//Funcion para seleccionar posicion de la jugada
function eligePos(arr,letra){

    let f = true;
    let temp =[];
    let newArr = [];

    while (f){

        var readline = require('readline-sync');
        let pos = readline.question("Elige una posicion: ");
        if (pos >= 1 && pos <= 9){
            temp = asignarValorenPosicion(arr,pos,letra);
            if(temp[1]){
                newArr = temp[0];
                f = false;
            }
            else console.log('Posicion ocupada');
            }
            else console.log('Posicion colocada incorrecta');

        }
        return newArr;
    }
//Funcion utilizada para que la computadora haga su juego
function juegaComputadora(arr,letra){

    let f = true;
    let pos = 0;
    let temp = [];
    while (f){
        pos = Math.floor(Math.random()*9)+1;
        temp = asignarValorenPosicion(arr,pos,letra);

        if (temp[1]){
            arr = temp[0];
            f = false;
        }   
    }
    return arr;
}

// Funcion que verifica si hay un jugador ganador
function verificarGanador(arr){

    //For loop para verificar si hay ganador en fila
    for (let i = 0; i < arr.length; i++){
        if (arr[i][0]==arr[i][1] && arr[i][0]==arr[i][2]){
            return arr[i][0];
        }
    }

    // For loop para verificar ganador en columna
    for (let j = 0; j < arr.length; j++){
        if (arr[0][j] == arr[1][j] && arr[0][j] == arr[2][j]){
            return arr[0][j];
        }
    }

    // if Conditional para verificar ganador en diagonal
    if(arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2]){
        return arr[0][0];
    }
    else if(arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0]){
        return arr[0][2];
    }
    //Seguir jugando
    else return arr;

    }


//Funcion para verificar si hay empate en el juego
function verificarEmpate(arr){
    for (let i = 0; i < arr.length;  i++){
        for (let j = 0; j < arr[i].length; j++){
            if(typeof(arr[i][j]) == 'number') return false;
        }
    }
    return true;
}



// Comienzo del programa

let tabla = [[1,2,3],[4,5,6],[7,8,9]];
let signoUser = '';
let signoPC = '';
var readline = require('readline-sync');

while (true){
    signoUser = readline.question("Elige 'X' u 'O': ");
    if (signoUser == 'X') {
        signoPC = 'O';
        break;
    }
    else if (signoUser == 'O') {
        signoPC = 'X'
        break;
    }
    else console.log('Elige un valor correcto "X" u "O"');

}

console.log("Valor de Usuario:",signoUser);
console.log("Valor de Computadora:",signoPC);


console.log(tabla);

while (true){

    
    eligePos(tabla,signoUser);
    console.log('Jugada de Usuario: ');
    console.log(tabla);

    if(verificarGanador(tabla) == 'X' || verificarGanador(tabla) == 'O'){
        console.log("El jugador "+verificarGanador(tabla)+" ha ganado la partida");
        break;
   }
   if (verificarEmpate(tabla)){
    console.log('Hay un empate');
    break;
   }
   juegaComputadora(tabla,signoPC);
   console.log('Jugada de la Computadora: ');
   console.log(tabla);
   if(verificarGanador(tabla) == 'X' || verificarGanador(tabla) == 'O'){
    console.log("El jugador "+verificarGanador(tabla)+" ha ganado la partida");
    break;
    }




}
