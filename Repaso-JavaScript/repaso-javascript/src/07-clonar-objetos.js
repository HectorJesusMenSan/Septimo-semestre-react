const invoice = {
  id : 10,
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
  //metodos
  greeting: function () {
    return `Hola ${this.client.name}`;
  },

  total: function() {
    let total = 0;

    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
};

invoice.client.name = 'Jesus';
invoice.total = 5000;
console.log(invoice);

//invoca metodos
const greeting = invoice.greeting();
console.log(greeting);

//Clonar objeto
//const invoice2 = invoice;

//Clonacion con funcion spread
const invoice2 = { ...invoice};
//Compara si son iguales en contenido.
const result = invoice == invoice2;

console.log(result);

if (result) {
  console.log(
    'Los objetos son iguales'
  );
} else{
  console.log(
    'Los objetos no son iguales'
  );
}

invoice2.id = 20;
console.log(invoice.id);
console.log(invoice2.id);



