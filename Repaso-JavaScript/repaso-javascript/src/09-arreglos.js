//Formas de declarar arreglos

const fruits = new Array('Manzana', 'platano');
//const fruits2 = ['manzana', 'platano'];

//Agregar datos
fruits.push('naranja', 'durazno');

console.log(
  fruits.length
);

fruits.forEach((fruit) => {
  console.log(
    fruit
  );
});

console.log('');

for (const fruit of fruits){
  console.log(
    fruit
  );
}

console.log('');
/*for (let index = 0; index < fruits.length; index++) {
  const element = fruits[index];
}*/
