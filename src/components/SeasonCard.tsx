
import { IonCard, IonCardHeader, IonCardTitle,  } from '@ionic/react';
import './SeasonCard.css';

interface ContainerProps {
  name: string;
}
const SeasonCard: React.FC<ContainerProps> = ({name}) => {
  return (
    <>
        {/* <img className='user-image' src="https://honeywell-androidchallenge.com/content/images/user_profile.png" alt="" /> */}
        <IonCard className='season-card'>
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
