import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { QualyfingResult } from '../../components/QualyfingResult';
import { QualifyingResult, Race } from '../../model/model';



export const RaceResults: React.FC = () => {
    const { year, round } = useParams<{ round: string, year: string }>();

    const [race, setRace] = useState<Race[]>([]);
    const [qualifyingResults, setQualifyingResults] = useState<QualifyingResult[]>([]);

  useEffect(() => {
    try {
      const getschedule = async () => {
        const response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/qualifying.json`);
        setRace(response.data.MRData.RaceTable.Races);
        setQualifyingResults(response.data.MRData.RaceTable.Races.QualifyingResults);
      }
      getschedule();
    } catch (error) {
      console.log(error);
    }
  },[round, year]);

console.log('race',race)
console.log('qualifying',qualifyingResults)

  return (
    <>
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                <IonTitle>{race}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <h1>Event Results {round} year {year}</h1>
                <ul>
                  {
                    race.map((race: Race, index) => {
                      return <QualyfingResult key={index} raceresult={race}/>
                    })
                  }
                </ul>
            </IonContent>
        </IonPage>
    </>
 );
};
