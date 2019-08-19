import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Home from './components/Home';
import Events from './components/Events';
import NavBar from './components/NavBar';
import Store from './components/Store';
import StoreItem from './components/StoreItem';
import EventDetails from './components/EventDetails';
import LoungeList from './components/LoungeList';
import CafeMenu from './components/CafeMenu';
import Footer from './components/Footer';
import CreateEvent from './components/CreateEvent';
import EventRequest from './components/EventRequest';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <NavBar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/store' component={Store} />
            <Route path='/storeitem/:id' component={StoreItem} />
            <Route path='/cafe' component={CafeMenu} /> 
            <Route path='/lounge' component={LoungeList} />
            <Route path='/events' component={Events} />
            <Route path='/event/:id' component={EventDetails} />     
            <Route path='/createevent' component={CreateEvent} />
            <Route path='/requestevent' component={EventRequest} />
            <Route path='/signup' component={SignUpForm} /> 
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

