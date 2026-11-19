let user = 
{
id: 1,
name: 'canchito feliz',
age: 25,

}

//uso del for in llamando a la variable user
for (let prop in user) {
    console.log(prop, user[prop]);
    
}
/////////////////////////////////////////////////////
//uso del for in llamando a la variable array animales

let animales = ['chanchito feliz', 'dragon', 'canguro'];

for (let indice in animales)
{
    console.log(indice, animales[indice]);
}