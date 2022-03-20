
const usuario = {
 nombre: "Erlich",
 email:"erlich.habana@gmail.com",
 edad:30,
 profecion: "Informatico"
 }
 
 const { nombre,email,edad,profecion,pais="Cuba"} = usuario;
// console.log(nombre,email);
 
 const mostrar = ({ nombre,edad}) => console.log(`${nombre} tengo ${edad}`);
 
 mostrar(usuario);
