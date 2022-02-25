import { IonCard } from '@ionic/react';
import React from 'react';
import './styles.css';
import { Race } from '../../model/model';


export type RoundCardProps = {
    grandPrix: Race;
}

export const RoundCard: React.FC<RoundCardProps> = ({grandPrix}) => {
  return (
    <>
        <IonCard routerLink={`/${grandPrix.season}/${grandPrix.round}/race-results`}>
            <div className='card_container'>
                <div className='date'>
                    <span>{grandPrix.date}</span>
                    <span>{grandPrix.time}</span>
                </div>
                <div className='name'>
                    <span className='race_name'>{grandPrix.raceName}</span>
                    <span className='circuit_name'>{grandPrix.Circuit.circuitName}</span>
                </div>
                <div className='points'>
                    <h4>24</h4>
                </div>
            </div>
        </IonCard>
    </>
  );
};
