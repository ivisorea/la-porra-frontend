import { IonCard } from '@ionic/react';
import React from 'react';
import './styles.css';

export const GrandPrixCard: React.FC = () => {
  return (
    <>
        <IonCard>
            <div className='card_container'>
                <div className='date'>
                    <h4>23-24</h4>
                    <h4>Mar</h4>
                </div>
                <div className='name'>
                    <h3>Bahrain</h3>
                    <h5>Formula 1 Grand Prix Place Bahrain</h5>
                </div>
                <div className='points'>
                    <h4>24</h4>
                </div>
            </div>
        </IonCard>
    </>
  );
};
