
import { IonCard, IonCardHeader, IonCardTitle,  } from '@ionic/react';
import './SeasonCard.css';

interface ContainerProps {
  name: string;
}
const SeasonCard: React.FC<ContainerProps> = ({name}) => {
  return (
    <>
        <IonCard className='season-card' routerLink='/season'>
          <IonCardHeader className='card-container'>
            <IonCardTitle className='card-title'>
              {name}
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>
    </>
        
  );
};

export default SeasonCard;