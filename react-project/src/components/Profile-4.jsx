import Avatar from "./Avatar";
import "../styles/Profile.css";


export default function ProfileFour() {

  return (
    <section className="profile">

      <h2>Katsuko Saruhashi</h2>
      
      <Avatar
        size={70}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      <ul>
        <li>
          <b>Profesión: </b> 
          geoquímica
        </li>
        <li>
          <b>Premios: 2 </b> 
          (Premio Miyake de geoquímica, Premio Tanaka)
        </li>
        <li>
          <b>Descubrió: </b>
          un método para medir el dióxido de carbono en el agua de mar
        </li>
      </ul>
    </section>

  );
}