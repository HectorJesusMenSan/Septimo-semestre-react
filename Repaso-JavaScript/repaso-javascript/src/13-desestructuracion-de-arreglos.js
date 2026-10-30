const users = [
  'hector',
  'emanual',
  'juan',
  'fusto',
  'carrasco',
  'gabriel',
];

//Las comas son elementos de arreglo que no queremos recuperar.
const [nom1, nom2, nom3, , ,nom6] = users;
console.log(nom1, nom2, nom3, nom6);

const [nomb1, nomb2, ...restNom] = users;
console.log(nomb1, nomb2, ...restNom);
