import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import NavContainer from '../components/NavContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <NavContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
