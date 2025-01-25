// Programa para jugar Tic-Tac_toe en JavaScript

let tabla = [[1,2,3],[4,5,6],[7,8,9]];
let flag = true;


// Funcion para asignar valor en la posicion dada
function asignarValorenPosicion(arr,pos,valor){
    let cont = 0
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







//Falta la funcion verificar si hay un ganador por ronda, se puede llevar un contador que si luego de haber juagdo 3 veces X u O empiece a verificar

    


tabla[0][0] = 'X';
var readline = require('readline-sync');
let signo = readline.question("Elige 'X' u 'O': ");





eligePos(tabla,signo);
console.log(tabla);
juegaComputadora(tabla,'O');
console.log(tabla);

