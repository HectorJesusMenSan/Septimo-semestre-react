
/*
function sayHello(name = 'Hector', edad = 0) {
  const greeting = `Hola, mundo fuction! ${name} edad ${edad}`;
  
  console.log(
    `Hola mundo, esta es una funcion: ${name} edad ${edad}`
  );

  return greeting;
  
}

const result = sayHello("Jesus", 20);
console.log(
  result
);

console.log(
  sayHello()
);
*/


const sayHello = function(name = 'Jesus', edad = 0) {
  const greeting = `Hola mundo function2: ${name} edad ${edad}`;
  return greeting;
  
};

console.log(
  sayHello('Hector', 25)
);
