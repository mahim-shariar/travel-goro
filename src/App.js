import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn/SignIn';
import Header from './components/Home/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Home/Main/Main';
import Worldmap from './components/World/Worldmap';
import Services from './components/Home/Services/Services';
import Tourguide from './components/TourGuide/Tourguide';
import Footer from './components/Footer/Footer';
import AllGuides from './components/allguide/AllGuides';

function App() {
  return (
    <div className='App'>
      <Router>
            <Header></Header>
        <Switch>
          <Route path='/home' >
            <Main></Main>
            <Worldmap></Worldmap>
            <Services></Services>
            <Tourguide></Tourguide>
          </Route>
          <Route path='/guide'>
            <AllGuides></AllGuides>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
