import { IonCard } from '@ionic/react';
import React from 'react';
import './styles.css';

interface ContainerProps {
    grandPrix: any;
}
export const GrandPrixCard: React.FC<ContainerProps> = ({grandPrix}) => {
  return (
    <>
        <IonCard>
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
