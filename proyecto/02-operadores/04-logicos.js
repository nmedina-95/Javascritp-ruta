//and, or, not

// and &&

let mayor = false;        //-- mayor = false --> !mayor = true (te da lo contrario)
let suscrito = true;

// console.log(true && true);
//console.log(false && true);


console.log('Operador and', mayor && suscrito);

// or
console.log('Operador or', mayor || suscrito); //si hay un true, siempre devolvera true
                                                //a no ser que sea false y false devolveria  false
//not
console.log('operador no', !mayor) // el ! devuelve lo contrario, si mayor = falso, 
                                 // devolvera true

let soloCatalogoInfantil = !mayor // equivale a un valor contrario //
                                  // mayor = falso pero !mayor = true (contrario) //
                                    // entonces esa variable es true//