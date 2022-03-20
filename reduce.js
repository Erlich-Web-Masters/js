const numbers = [2,4,6,8,10];

//reduce((acc acumulador itera con todos los elementos,item,index,arr))
  //sumar elementos de un array

	const res = numbers.reduce((acc,item) => {
	      return acc = acc + item;
		}	);//luego del colback se pude ponde un valor inicial , valor luego del parentesis

		console.log(res);

 //concatenar string de un array
 const strings = ['Mi','nombre','es','Erlich'];
 const unir = strings.reduce((acc,item) => {
    return acc += `  ${item}`;
 },'Hola !!');

 console.log(unir);

 //Objetos suma de edad

 const Obj = [
 
	{nombre: 'Erlich', edad: 30},
	{nombre:'Erlito',edad:6}
 ]

 const re = Obj.reduce((acc,item) => {
	return acc += item.edad;
 },0);

 console.log(re);

 //Devolver el mayor de un array

 const numeros = [5,6,44,21,47,54,63];

  const mayor = numeros.reduce((acc,item) => {

	return Math.max(acc,item);
	},0);
  const menor = numeros.reduce((acc,item) => {

	return Math.min(acc,item);
	});

	console.log(`El numero mayor es: ${mayor}`);
	console.log(`El numero menor es: ${menor}`);








