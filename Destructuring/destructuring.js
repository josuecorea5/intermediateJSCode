//Array destructuring
const aprender = ["JavaScript", "Vue", "React","Python"];

let [JavaScript, Vue, React, django] = aprender;

console.log(Vue,django);

//Destructuring String
let direccion = "San Miguel, Lolotique, Barrio San Isidro";

let [departamento, pueblo, barrio] = direccion.split(",");

console.log(pueblo);

//Object destructuring
let perro = {
  nombre: "Guapo",
  color: "Negro",
  raza: "Desconocida",
  hermano: {
    nombre: "Duki",
    color: "Gris",
    raza: "Desconocido"
  }
}

let {nombre, color, raza} = perro;
let {nombre:nombre1, color:color1, raza:raza1} = perro.hermano;
console.log(nombre)
console.log(color)
console.log(nombre1)

//destructuring in function, parameters for defect
const saludar = ({saludo, nombre="Josué", momento}) => {
  console.log(`${saludo} ${nombre} feliz ${momento}!`)
}

saludar({saludo: "Hello", momento: "Dia"})

