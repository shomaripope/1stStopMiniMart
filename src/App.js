import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Home from './components/Home';
import Events from './components/Events';
import 'materialize-css/dist/css/materialize.min.css';
import Admin from './components/Admin';
import Store from './components/Store';
import StoreItem from './components/StoreItem';
import EventDetails from './components/EventDetails';
import LoungeList from './components/LoungeList';
import CafeMenu from './components/CafeMenu';
import Footer from './components/Footer';
import CreateEvent from './components/CreateEvent';
import EventRequest from './components/EventRequest';
import EventAgreement from './components/EventAgreement';
import SignInForm from './components/SignInForm';
import Header from './components/Header';
import WeeklyEvents from './components/WeeklyEvents';
import WeeklySpecials from './components/WeeklySpecials';
import PastEvents from './components/PastEvents';
import M from "materialize-css";

// import firebase from 'firebase'

class App extends Component {
// Import Materialize

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

  render() {
    return (
      <BrowserRouter>
        <div className="App" >
        <Header />
        <div className="container">
        </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route path='/store' component={Store} />
            <Route path='/storeitem/:id' component={StoreItem} />
            <Route path='/cafe' component={CafeMenu} /> 
            <Route path='/lounge' component={LoungeList} />
            <Route path='/events' component={Events} />
            <Route path='/event/:id' component={EventDetails} />     
            <Route path='/createevent' component={CreateEvent} />
            <Route path='/requestevent' component={EventRequest} />
            <Route path='/eventagreement' component={EventAgreement} />
            <Route path='/pastevents' component={PastEvents} /> 
            <Route path='/weeklyevents' component={WeeklyEvents} />
            <Route path='/weeklyspecials' component={WeeklySpecials} />
            <Route path='/signup' component={SignUpForm} /> 
            <Route path='/signin' component={SignInForm} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

