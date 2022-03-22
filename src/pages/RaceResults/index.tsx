import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Race } from '../../model/model';
import { CircuitResult } from '../../components/CircuitResult';



export const RaceResults: React.FC = () => {
    const { year, round } = useParams<{ round: string, year: string }>();

    const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    try {
      const getschedule = async () => {
        const response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/qualifying.json`);
        setRaces(response.data.MRData.RaceTable.Races);
      }
      getschedule();
    } catch (error) {
      console.log(error);
    }
  },[round, year]);

console.log('races',races)

  return (
    <>
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                <IonTitle>Race Results Round {round} year {year}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <ul>
                  {
                    races.map((race: Race, index) => {
                      return <CircuitResult key={index} raceresult={race} />
                    })
                  }
                </ul>
            </IonContent>
        </IonPage>
    </>
 );
};
