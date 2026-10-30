import {findInvoicesById} from './data/invoices';

findInvoicesById(4)
  .then((result) => {
    console
      .log(result);
    console
      .log('simulando tarea');
  })
  .catch((error) => {
    console
      .log(error);
  }
);
