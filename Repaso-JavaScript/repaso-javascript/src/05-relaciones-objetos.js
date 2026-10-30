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
  total: 1000,

  //metodo
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

invoice.client.name = 'Jesus';
invoice.total = 5000;
console.log(invoice);

//invoca metodos
const greeting = invoice.greeting();
console.log(greeting);

