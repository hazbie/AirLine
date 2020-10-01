import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import ViewComponent from './RouteComponent/ViewComponent';
import Footer from './component/Footer/Footer';
import ViewHeader from './component/Header/View';
import Particles from 'react-particles-js';
import * as C from './constants'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFormAuthEvent = null;
  
    useEffect(() => {
    unsubscribeFormAuthEvent = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }, () => { console.log(currentUser); })
        });
      }
      setCurrentUser(userAuth)
    })
    return () => unsubscribeFormAuthEvent()
  }, []);

  return (
    <div className = "App">
      <ViewHeader currentUser = {currentUser} />
      <Particles className='particales' params={C.PARTICLES_OPTIONS} />
      <Switch>
        <ViewComponent />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
