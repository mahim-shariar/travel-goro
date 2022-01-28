import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Drawers from './components/DashBoard/Drawers/Drawers';
import HomeBlogs from './components/HomeBlogs/HomeBlogs';
import BlogInfo from './components/BlogInfo/BlogInfo';
import Login from './components/Login/Login/Login';
import Registar from './components/Login/Registar/Registar';

function App() {
  return (
    <div className='App' >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/' >
              <Main></Main>
              <Worldmap></Worldmap>
              <Services></Services>
              <Tourguide></Tourguide>
              <HomeBlogs></HomeBlogs>
              <Footer></Footer>
            </Route>
            <Route path='/home' >
              <Main></Main>
              <Worldmap></Worldmap>
              <Services></Services>
              <Tourguide></Tourguide>
              <HomeBlogs></HomeBlogs>
              <Footer></Footer>
            </Route>
            <Route path='/guide'>
              <AllGuides></AllGuides>
              <Footer></Footer>
            </Route>
            <Route path='/login'>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path='/registar'>
              <Registar></Registar>
              <Footer></Footer>
            </Route>
            <PrivateRoute path='/service/:id'>
              <UIservice></UIservice>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path='/blog/:id'>
              <BlogInfo></BlogInfo>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path='/myorder'>
              <MyOrder></MyOrder>
              <Footer></Footer>
            </PrivateRoute>
            <Route path='/contact'>
              <Contact></Contact>
              <Footer></Footer>
            </Route>
            <PrivateRoute path='/Deshbord'>
              <Drawers></Drawers>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
