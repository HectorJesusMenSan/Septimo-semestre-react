
//Cuando son solo para desarrollar en una sola linea
const sayHello = (name = 'Hector', edad='20')=>
  `Hola mundo esto es una flecha! ${name}, edad ${edad}`;

const add = (a = 0, b = 2) => a+b;

console.log(
  sayHello()
);

console.log(
  add(1)
);
