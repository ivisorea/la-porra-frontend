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
// import { useState } from 'react';
// import xml2js from 'xml2js';
import { IonReactRouter } from '@ionic/react-router';
import { home, person } from 'ionicons/icons';
import Home from './pages/HomeTab/HomeTab';
import Tab3 from './pages/Tab3';
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
import SeasonPage from './pages/SeasonPage/SeasonPage';
// import axios from 'axios';
import { useEffect } from 'react';
import { UserTab } from './pages/UserTab';

setupIonicReact();

const App: React.FC = () => {
  // const [season, setSeason] = useState("");

  useEffect(() => {
    // const parser = new xml2js.Parser();
    // const getData = async () => {
    //   const results = await axios.get('http://ergast.com/api/f1/2021', {
    //     "Content-Type": "application/xml; charset=utf-8"
    //   });
    //   parser.parseString(results.data, (err, result) => {
    //     setSeason(result);
    //     console.log(result);
    //   }
    //   );
    // };
    // getData();
  }, []);


  return(
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/season">
            <SeasonPage/>
          </Route>
          <Route exact path="/user">
            <UserTab/>
          </Route>
          <Route path="/tab3">
            <Tab3 />
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
