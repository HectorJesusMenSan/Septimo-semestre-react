
//El invoicesClient, el nombre se le da en el archivo donde se llamar
import invoicesClient, { invoices, paper } from "./data/invoices.js";




//Metodo map,  crea un nuevo arreglo con lo que queramos 
const invoicesName = invoices.map((i)=>{
  return i.name;
});

console.log(
  invoicesName
);

/*const invoicesClient = invoices.map((i) => {
  return i.client.name;
});*/
console.log(
  invoicesClient
);


const invoiceById = invoices.find((i) => {
  //Tres igual para que coincida el contenido y el tipo de datos.
  return i.id === 3;
});

console.log(invoiceById);

const invoiceByName = invoices.find((i) => {
  //Tres igual para que coincida el contenido y el tipo de datos.
  return i.client.name == 'compras de oficina';
});

console.log(invoiceByName);

/* El metodo filtrer crea un nuevo array con todos los elementos que cumplanm con la condicion */
console.log('aplicacion del metodo filtrer por id');
const invoicesFilter = invoices.filter((i) => i.id > 1);
console.log(invoicesFilter);

/*El medodo includes determina si una matriz incluye eun determinad elemento, devuelve true o false. */

const invoicesFilter2 = invoices.filter((i) => i.items.includes(paper));
console.log(invoicesFilter2);


/*Metodo someone compruan si almenos un elemento del array cumple con la condicion implementada */
const result = invoices.some((i) => i.client.name === 'Hector');
console.log(result);






