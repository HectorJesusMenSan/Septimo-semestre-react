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
        product: 'Keyboard',
        price: 299,
        quantity: 2,
      },

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
      {
        product: 'cocoa',
        price: 299,
        quantity: 2,
      },

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


//Metodo map 
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


