import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SeasonCard from '../components/SeasonCard';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar >
          <IonTitle style={{backgroundcolor: '#e10600'}}>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Season</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <SeasonCard name='Season 2021'/>
        <SeasonCard name='Season 2022'/>
        {/* <ExploreContainer name="Season" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
