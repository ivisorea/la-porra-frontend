
import { IonCard, IonCardHeader, IonCardTitle,  } from '@ionic/react';
import './styles.css';

interface ContainerProps {
  year: string;
}
export const SeasonCard: React.FC<ContainerProps> = ({ year }) => {
  return (
    <>
        <IonCard className='season-card' routerLink={`/season/${year}`}>
          <IonCardHeader className='card-container'>
            <IonCardTitle className='card-title'>
              Season {year}
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>
    </>
        
  );
};
