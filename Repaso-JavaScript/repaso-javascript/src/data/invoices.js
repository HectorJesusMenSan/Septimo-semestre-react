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

/*default(clientName) => {
    return invoices.find((i) => i.client.name === clientName);
};*/

const invoiceByClient = (clientName) => {
    return invoices.find((i) => i.client.name === clientName);
};

export const invoiceById = (id) => {
  return invoices.find((i) => i.id === id);
};

export const findInvoicesById = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
      //Guarda objeto
      const result = invoiceById(id);
      if (result){
        //Resolve lo guarda
        resolve(result);
      }else{
        reject('error: no existe factura');
      }  
    },2500);
  });

  return promise;
};


//Segunda manera de exportar, se le tiene que quitar la palabra export a lo que ya se tenia
export{
    paper,
    invoices,
    invoiceByClient as default,
};