import {invoiceById} from './data/invoices';

const promise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    //Guarda objeto
    const result = invoiceById(3);
    if (result){
      //Resolve lo guarda
      resolve(result);
    }else{
      reject('error: no existe factura');
    }  
  },2500);

});

promise
//Agarra lo que se tiene en resolve osea el resultado.
  .then((result) => {
    console.log(result);
    console.log('Simulando tarea con demora');
    
  })
  .catch((error) => {
    console.error(error);
  });

//Otra manera de escribirlo
promise.then(console.log).catch(console.error);
