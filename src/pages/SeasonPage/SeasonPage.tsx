import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { GrandPrixCard } from '../../components/GrandPrixCard';
import './SeasonPage.css';

const SeasonPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Season</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GrandPrixCard/>
      </IonContent>
    </IonPage>
  );
};

export default SeasonPage;
