import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { SeasonCard } from '../../components/SeasonCard';



const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader  >
        <IonToolbar color='primary' >
          <IonTitle >Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SeasonCard year='2021'/>
        <SeasonCard year='2022'/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
