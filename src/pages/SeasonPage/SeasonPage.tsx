import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { GrandPrixCard } from '../../components/GrandPrixCard';
import './SeasonPage.css';

const SeasonPage: React.FC = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
