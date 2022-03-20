//Copiar un objeto a partir de otro
const n={
    nombre:'Erlich',
    edad:30
    }
const y={...n};
y.nombre='Erlich Airam';

const z = [n,y];
console.log(z);

