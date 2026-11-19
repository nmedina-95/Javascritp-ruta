//------- short-circuit --------//

//falso
//false
//0 
//''
//null
//undefined
//NaN


let nombre = 'chanchito feliz'; 
let username = nombre || 'Anonimo'; // le asignare a la variable Username -> nombre o sino le pondre 'Anonimo'
console.log(username);

function fn1(){
    console.log('soy funcion 1')
return false;
}


function fn2(){
    console.log('soy funcion 2')
return true;
}

let x = fn1() && fn2(); // nos dara un resultado ya que la funcion fn1 y fn2 
                        //estan retornando (return) un resultado en true
                        //si estubieran en false, no retornarian nada

