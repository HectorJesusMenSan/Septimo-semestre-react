import Avatar from "./Avatar";
import "../styles/Profile.css";

export default function ProfileThree() {
  return (
    <section className="profile">
      <h2>
        Maria Skłodowska-Curie
      </h2>

      <Avatar
        size={80}
        person={{
          name: 'Maria Skłodowska-Curie',
          imageId: 'szV5sdG'
        }}
      />
      
      <ul>
        <li>
          <b>Profesión: </b> 
          física y química
        </li>
        
        <li>
          <b>Premios: 4 </b> 
          (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)
        </li>
        
        <li>
          <b>Descubrió: </b>
          polonio (elemento químico)
        </li>
      
      </ul>
    </section>
  );

}