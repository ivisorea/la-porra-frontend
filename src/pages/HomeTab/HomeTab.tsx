import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SeasonCard from '../../components/SeasonCard';



const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar color='#e10600'>
          <IonTitle >Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SeasonCard name='Season 2021'/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
