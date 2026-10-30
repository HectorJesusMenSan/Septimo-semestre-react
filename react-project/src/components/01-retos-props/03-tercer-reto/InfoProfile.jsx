import "../../../styles/Profile.css";

export default function InfoProfile({text}) {
  return (
    <div>
      <h1>Información del Perfil</h1>
      <p>{text}</p>
    </div>
  );
}