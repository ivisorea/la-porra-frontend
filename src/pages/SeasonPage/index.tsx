import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { GrandPrixCard } from '../../components/GrandPrixCard';
import { useParams } from 'react-router';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ContainerProps {
 
}
export const SeasonPage: React.FC<ContainerProps> = () => {
  const  {year}  = useParams<{ year: string }>()

  const [grandPrix, setGrandPrix] = useState<any[]>([]);

 

  useEffect(() => {
    
    try {
      const getschedule = async () => {
        const response = await axios.get(`https://ergast.com/api/f1/${year}.json`);
        setGrandPrix(response.data.MRData.RaceTable.Races);
        console.log(grandPrix)
      }
      getschedule();
    } catch (error) {
      console.log(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Season {year}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <ul>
          {
            grandPrix.map((grandPrix: any, index) => {
              return <GrandPrixCard key={index} grandPrix={grandPrix} />
            })
          }
        </ul>
      </IonContent>
    </IonPage>
  );
};

