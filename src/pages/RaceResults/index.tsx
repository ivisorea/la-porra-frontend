import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Race, RoundResult } from '../../model/model';
import { CircuitResult } from '../../components/CircuitResult';
import { FinalPosition } from '../../components/FinalPosition';
import { PredictionForm } from '../../components/PredictionForm';
import { AppContext } from '../../context/AppContext';
import { Modal } from '../../components/Modal/Modal';
import { DriverList } from '../../components/DriverList';

export const RaceResults: React.FC = () => {
    const { year, round } = useParams<{ round: string, year: string }>();

    const [races, setRaces] = useState<Race[]>([]);
    const [roundResults, setRoundResults] = useState<RoundResult[]>([])

    const { openModal } = useContext(AppContext);

  useEffect(() => {
    try {
      const getQualifying = async () => {
        const response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/qualifying.json`);
        setRaces(response.data.MRData.RaceTable.Races);
      }
      getQualifying();
    } catch (error) {
      console.log(error);
    }
  },[round, year]);

  useEffect(() => {
    try{
      const getRoundResults = async() => {
        const response = await fetch(`https://ergast.com/api/f1/${year}/${round}/results.json`);
        const data = await response.json();
        setRoundResults(data.MRData.RaceTable.Races)
      }
      getRoundResults();
    }
      catch (error){
        console.log(error)
      }
    }, [round, year]);


console.log('races',races)
console.log('roundResults', roundResults)

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
                    races.map((race: Race, index: number) => {
                      return <CircuitResult key={index} raceresult={race}/>
                    })
                  }
                </ul>
                <PredictionForm/>
                
                {
                  roundResults.map((roundResult: RoundResult, index) => {
                    return <FinalPosition key={index} roundResult={roundResult}/>
                  })
                }
                {
                  openModal && 
                    <Modal>
                      <DriverList/>
                    </Modal>
                }
            </IonContent>
        </IonPage>
    </>
 );
};
