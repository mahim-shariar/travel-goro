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
import Blog from './components/DashBoard/Blog/Blog';

function App() {
  return (
    <div className='App' >
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/' >
              <Header></Header>
              <Main></Main>
              <Worldmap></Worldmap>
              <Services></Services>
              <Tourguide></Tourguide>
              <HomeBlogs></HomeBlogs>
              <Footer></Footer>
            </Route>
            <Route path='/home' >
              <Header></Header>
              <Main></Main>
              <Worldmap></Worldmap>
              <Services></Services>
              <Tourguide></Tourguide>
              <HomeBlogs></HomeBlogs>
              <Footer></Footer>
            </Route>
            <Route path='/guide'>
              <Header></Header>
              <AllGuides></AllGuides>
              <Footer></Footer>
            </Route>
            <Route path='/login'>
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path='/Deshbord/blog'>
              <Header></Header>
              <Blog></Blog>
              <Footer></Footer>
            </Route>
            <Route path='/registar'>
              <Header></Header>
              <Registar></Registar>
              <Footer></Footer>
            </Route>
            <PrivateRoute path='/service/:id'>
              <Header></Header>
              <UIservice></UIservice>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path='/blog/:id'>
              <Header></Header>
              <BlogInfo></BlogInfo>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path='/myorder'>
              <Header></Header>
              <MyOrder></MyOrder>
              <Footer></Footer>
            </PrivateRoute>
            <Route path='/contact'>
              <Header></Header>
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
