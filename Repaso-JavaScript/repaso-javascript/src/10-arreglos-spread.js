//Formas de declarar arreglos

const fruits = new Array('Manzana', 'platano');
const fruits2 = fruits.concat('durazno', 'mango');

console.log(fruits);
console.log('');
console.log(fruits2);

const products = ['mesa', 'silla', 'sofa'];
const clothes = ['camisa', 'camiseta', 'playera'];

const market = [
  ...fruits,
  ...products,
  ...clothes,
  'tv',
  'computadora',
  'telefono',
];
console.log(market);

const market2 = fruits2.concat(clothes).concat('tv', 'computadora', 'te;fono');
console.log(market2);
console.log(fruits2);

