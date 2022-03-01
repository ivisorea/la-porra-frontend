import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, person } from 'ionicons/icons';
import './App.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { UserTab } from './pages/UserTab';
import { SeasonPage } from './pages/SeasonPage';
import { RaceResults } from './pages/RaceResults';
import { HomePage } from './pages/HomePage';

setupIonicReact();



const App: React.FC = () => {

  return(
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <HomePage/>
          </Route>
          <Route exact path="/season/:year">
            <SeasonPage />
          </Route>
          <Route exact path="/user">
            <UserTab/>
          </Route>
          <Route path="/:year/:round/race-results">
            <RaceResults/>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon  icon={home} />
          </IonTabButton>
          <IonTabButton tab="user" href="/user">
            <IonIcon  icon={person} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
}

export default App;
