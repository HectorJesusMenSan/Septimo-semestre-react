
import "../../../styles/Profile.css";

export default function Profile({ person, size }) {
  return (
    <div>
      <h1>
        Foto de {person.name}
      </h1>

      <img
        className="avatar"
        src={person.imageUrl}
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );
}
