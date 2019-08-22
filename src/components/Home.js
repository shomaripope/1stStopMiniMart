import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="container" id="header">
                <h1>Welcome To 1st Stop Mini-Mart</h1>
                <h4>Mini Mart/Cafe/Lounge/Event Center</h4>
                <h4>Located at 444 Hightland Ave NE, Atlanta Ga 30312</h4>
                </div>
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