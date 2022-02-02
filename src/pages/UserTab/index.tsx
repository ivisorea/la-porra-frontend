import {  IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';

export const UserTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader color='#e10600' >
        <IonToolbar >
          <IonTitle >User</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='user_container'>
          <form className='form-control'>
            <div className='form-group'>
              <label>Username
              <input type='text' className='form-control' placeholder='Username'/>
              </label>
            </div>
            <div className='form-group'>
              <label>Password
              <input type='password' className='form-control' placeholder='Password'/>
              </label>
            </div>
            <button type='submit' className='btn btn-primary'>Login</button>
          </form>
        </div>  
      </IonContent>
    </IonPage>
  );
};


