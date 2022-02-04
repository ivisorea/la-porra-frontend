import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';

export const UserTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar color="primary">
          <IonTitle >User</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <div className='container'>
          <form className='user_container'>   
            <IonItem className='input'>
              <IonLabel position="floating"  className='label'>User</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem className='input'>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonButton className='btn btn-primary button' expand='block'>Login</IonButton>
          </form>

        
          </div>
     


      </IonContent>
    </IonPage>
  );
};


