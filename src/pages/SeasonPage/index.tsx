/* eslint-disable react-hooks/exhaustive-deps */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RoundCard } from '../../Components/RoundCard';
import { useParams } from 'react-router';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Race } from '../../model/model';


export const SeasonPage: React.FC = () => {
  const { year }  = useParams<{ year: string }>()

  const [grandsPrix, setGrandsPrix] = useState<Race[]>([]);

  useEffect(() => {
    try {
      const getSchedule = async () => {
        const response = await axios.get(`https://ergast.com/api/f1/${year}.json`);
        setGrandsPrix(response.data.MRData.RaceTable.Races);
      }
      getSchedule();
    } catch (error) {
      console.log(error);
    }
  
  },[year]);

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
            grandsPrix.map((grandPrix: Race, index) => {
              return <RoundCard key={index} grandPrix={grandPrix} />
            })
          }
        </ul>
      </IonContent>
    </IonPage>
  );
};

