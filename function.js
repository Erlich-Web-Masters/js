const sumar = (n1,n2) => {
      return n1 + n2 
      }
  console.log(sumar(7,7))

//funcion anonima autoejecutable

//Recursividad es una funcion que se llama asi misma una y otra vez hasta que se cumple una condicion de salida, puede recorrer array ect funciona similar a un ciclo
const conteoRegresivo = (a) => {
    if (a < 0) return
      console.log(a);
    return conteoRegresivo( a - 1)
  }
  conteoRegresivo(10)