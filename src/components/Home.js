import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="col s12 m7">
                <div className="container" id="intro"></div>
                <h3>First Stop Mini Mart is a brand new convenience store and coffee shop, located in the heart of the city. Our locations key feature is a charming coffee shop featuring free-wifi, television, food & drink, special events and more!
                </h3>
                <h4>Call us @: 678.515.8928</h4>
                <div>
                <div className="container">
                    <Link to='/store'> 
                    <div className="card" id="storethumbcard">
                    <h1>Store</h1>
                    </div>
                    </Link>
                    
                    <Link to='/cafe'> 
                    <div className="card" id="cafethumbcard">
                    <h1>Cafe</h1>
                    </div>
                    </Link>

                    <Link to='/lounge'> 
                    <div className="card" id="loungethumbcard">
                    <h1>Lounge</h1>
                    </div>
                    </Link>

                    <Link to='/events'> 
                    <div className="card" id="eventsthumbcard">
                    <h1>Events</h1>
                    </div>
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

