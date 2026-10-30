const user = {
  name: 'hector',
  age: 20,
  email: 'asdasdsa',
  ranking: 9,
};


//desesctructuracion de objetos en funciones
const detail = (user) =>{
  const{name, age, ranking} = user;
  console.log(
    name,
    age,
    ranking
  ); 
};

detail(user);
