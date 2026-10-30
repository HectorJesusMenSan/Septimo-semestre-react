const paper = {
  product: 'Keyboard',
  price: 299,
  quantity: 2,
};


const invoices = [
  {
    id : 1,
    name : 'compras de oficina',
    date: new Date(),
    client: {
      id: 1,
      name: 'Hector',
      lastname: 'Mendez',
      age: 20
    },
    //total: 1000,

    //Arreglos en objetos
    items: [
      //arreglo de objetos
      {
        product: 'Mause',
        price: 200,
        quantity: 1,
      },

      {
        product: 'Paper',
        price: 100,
        quantity: 10,
      },

    ],
  },

  {
    id : 2,
    name : 'compras de tienda',
    date: new Date(),
    client: {
      id: 1,
      name: 'Hector',
      lastname: 'Mendez',
      age: 20
    },
    //total: 1000,

    //Arreglos en objetos
    items: [
      //arreglo de objetos
      paper,

      {
        product: 'coco',
        price: 200,
        quantity: 1,
      },

      {
        product: 'Pa;ales',
        price: 100,
        quantity: 10,
      },
    ],
  },

  {
    id : 3,
    name : 'compras de papeleria',
    date: new Date(),
    client: {
      id: 1,
      name: 'Hector',
      lastname: 'Mendez',
      age: 20
    },
    //total: 1000,

    //Arreglos en objetos
    items: [
      //arreglo de objetos
      {
        product: 'Carton',
        price: 299,
        quantity: 2,
      },

      {
        product: 'Cartulina',
        price: 200,
        quantity: 1,
      },

      {
        product: 'Cascaron',
        price: 100,
        quantity: 10,
      },
    ],
  },

];

console.log(invoices);


//Metodo map,  crea un nuevo arreglo con lo que queramos 
const invoicesName = invoices.map((i)=>{
  return i.name;
});

console.log(
  invoicesName
);

const invoicesClient = invoices.map((i) => {
  return i.client.name;
});
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
console.log(
  result
);






