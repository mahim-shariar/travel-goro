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
import UIservice from './components/uiservice/UIservice';
import MyOrder from './components/Order/MyOrder';
import Contact from './components/Contact/Contact';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' >
            <Main></Main>
            <Worldmap></Worldmap>
            <Services></Services>
            <Tourguide></Tourguide>
          </Route>
          <Route path='/home' >
            <Main></Main>
            <Worldmap></Worldmap>
            <Services></Services>
            <Tourguide></Tourguide>
          </Route>
          <Route path='/guide'>
            <AllGuides></AllGuides>
          </Route>
          <Route path='/login'>
            <SignIn></SignIn>
          </Route>
          <PrivateRoute path='/service/:id'>
            <UIservice></UIservice>
          </PrivateRoute>
          <PrivateRoute path='/myorder'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
