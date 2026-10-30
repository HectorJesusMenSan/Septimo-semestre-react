import { useState } from 'react';
import AdminPanel from '/src/components/AdminPanel';
import LoginPanel from '/src/components/LoginPanel';

const user = {
  isLogged : true,

  setUser(data){
    this.isLogged = data;
  },

}

export default function ChangeButton(){
  const [, setContador] = useState(0);

  function cambiarPanel(){
    user.setUser(!user.isLogged);  
    setContador(n => n + 1);        // avisa a React que redibuje
  }
  
  return (
    <>
      <h1>
        Selecciona para cambiar panel
      </h1>

      {user.isLogged ? <AdminPanel /> : <LoginPanel />}

      <button onClick = {cambiarPanel} >
        cambiar panel 
      </button>
    </>
  );
}