const numbers = [1,2,3,4,5];

const sum = (a,b,c,d,e) => {
  return a+b+c+d+e;
}

//spread operator expande o separa en elementos datos allá en donde se necesiten.
console.log(sum(...numbers));

//también nos ayuda a clonar arrays y objects ojo una copia no una referencia
const arrayCopy = [...numbers];
console.log(arrayCopy);

const person = {nombre: "David", edad: 20}
const personCopy = {...person}
console.log(personCopy);

//fusionar matrices y objetos
const preferences = {cerveza: 'Heineken', colo: 'verde'}

const persona = {...person,...preferences}
console.log(persona);

//REST lo que nos permite es que a una funcion le pasemos un número de parámetros
//indefinidos.


const sumarMuchosNumeros = (...argumentos) => {
  return argumentos.reduce((current,total) => current + total);
}
//funciona sin nigun problema
console.log(sumarMuchosNumeros(...numbers,6,7,8,9,10,...[55],...[61]))










