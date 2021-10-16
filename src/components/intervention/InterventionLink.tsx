import { IonButton } from '@ionic/react';
import './InterventionLink.css';

interface ContainerProps { }

const InterventionLink: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton color="danger" shape="round" href="/help">Don't Panic!</IonButton>
    </div>
  );
};

export default InterventionLink;
