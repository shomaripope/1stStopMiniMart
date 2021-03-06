import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="col s12 m7">
                <div className="container"></div>
                <h5>First Stop Mini Mart is a brand new convenience store and coffee shop, located in the heart of the city. We offer a charming coffee shop with free-wifi, television, special events and more!
                </h5>
                <h5>Call us @: 678.515.8928</h5>
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

