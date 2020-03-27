import React from 'react';
import Header from './components/headerComponent/headerComponent';
import Testimonials from './components/testimonialComponent/testimonials';
import AboutUs from './components/aboutComponent/aboutUs';
import Contact from './components/contactComponent/contactUs';
import Relaible from './components/reliableComponent/reliable';
import Services from './components/servicesComponent/services';
import Home from './components/homeComponent.js/home';
import App1 from './App1'
import SignForm from './components/SignFormComponent/SignForm';
import ShopHome from './components/shoping_home/shopHome'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homee}/>
          <Route path="/subsidy" component={App1}/>
          <Route path="/signup" component={SignForm}/>
          <Route path="/buy" component={ShopHome}/>
        </Switch>
    </div>
    </Router>
 
  );
}

const Homee=()=>(
  <div>
      <Header></Header>
      <Home></Home>
      <AboutUs></AboutUs>
      <Services></Services>
      <Testimonials></Testimonials>
      <Relaible></Relaible>
      <Contact></Contact>
  </div>
);

export default App;
