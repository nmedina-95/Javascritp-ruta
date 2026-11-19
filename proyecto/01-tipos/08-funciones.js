function saludar(){

console.log('hola mundo');


}
saludar();

/* 1.- creamos la uncion*/
function suma(){         /* vemos que no imprime ya que no tiene un console.log,*/
                         /* para eso lo pondremos dentro de una variable*/
    return 2 + 2;        /* y luego lo imprimiremos con un log, para que nos de el resultado*/

}

/* 2.- lo ponemos en una variable */
let resultado = suma();

/* 3.- lo imprimiros con el log, llamando a esa variabble */
 console.log(resultado);

 
