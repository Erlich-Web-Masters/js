let dias = ['Lunes','Martes','Miercoles','Jueves','Viernes'];

  for (dia of dias){
     console.log(dia);
  }

 let user = {
    name:"Erlich",
    email:"erlich@gamil.com",

 } 

console.log("**********************************************************************************")

 for (prop in user){
    console.log(prop)
 }

console.log("**********************************************************************************")

let frutas = ['fresa','kiwi','mango']
frutas.forEach(item => console.log(item));

console.log("**********************************************************************************")

let animales = ['perro','gato','leon']

for (let index = 0; index < animales.length; index++) {
   const element = animales[index];
   console.log(element)
}