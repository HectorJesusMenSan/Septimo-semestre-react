import Card from './Card';
import ProfileThree from './Profile-3';
import ProfileFour from './Profile-4';
import Profile from './01-retos-props/02-segundo-reto/Profile';
import ProfileTwo from './01-retos-props/03-tercer-reto/Profile';
import InfoProfile from './01-retos-props/03-tercer-reto/InfoProfile';

export default function Gallery() {
  return (
      <Card>
        <h1>
        Cientificos Notables
        </h1>
        <Card>
          <ProfileThree />
        </Card>

        <Card>
          <ProfileFour />
        </Card>

        <Card>
          <Profile />
        </Card>


        <Card>
          <h2>reto 3</h2>
          <Card>
            <ProfileTwo 
              person = {{
                name: 'Aklilu Lemma',
                imageUrl: 'https://i.imgur.com/OKS67lhm.jpg',
                imageSize: 70
              }}
            />
          </Card>

          <Card>
            <InfoProfile 
              text ="
                Aklilu Lemma fue un destacado científico 
                etíope que descubrió un tratamiento 
                natural para la esquistosomiasis.
              " 
            />
          </Card>
        </Card>
      </Card>
  );
}
