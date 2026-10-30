const users = fetch('https://jsonplaceholder.typicode.com/users');
users
  .then((response) => response.json())
  .then((data) => console.log(data));