import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import InterventionLink from '../components/intervention/InterventionLink';
import './Inspiration.css';

const Inspiration: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inspiration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow><IonCol></IonCol></IonRow>
          <IonRow><IonCol></IonCol></IonRow>
          <IonRow><IonCol></IonCol></IonRow>
          <IonRow><IonCol><InterventionLink /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inspiration;
