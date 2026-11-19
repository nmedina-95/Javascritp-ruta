
/* deaclramos variables con su valor para el objeto que se creara*/
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

/*creamos el "objeto literal" y le ponemos valor a sus propiedades*/
let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16
};

console.log(personaje); // se ve todas las propiedades //
console.log(personaje.nombre); // se ve solo una propiedad//
console.log(personaje['anime']);// se ve solo una propiedad//


//formas de darle un valor a la propiedad *edad con la notacion de punto* 

personaje.edad = 14;    /*caso 1*/


//formas de darle un valor a la propiedad *edad con la notacion con corchetes* 
personaje['edad'] = 15;/*caso 2*/


/*ejemplo de caso 2 */
let llave = 'edad';   /*creamos uan variable copn valor*/
personaje[llave] = 16 /*la llamamos desde los corchetes*/

