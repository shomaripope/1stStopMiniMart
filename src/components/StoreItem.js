import React, { Component } from 'react';
import drinks from '../images/drinks2';
import snacks from '../images/snacks.jpg';
import candy from '../images/candy.jpg';
import toiletries from '../images/toiletries.jpg';

class StoreItem extends Component {
    render() {
        return (
            <div>
                <div className="col s12 m7">
                    <h2 className="header">Drinks</h2>
                        <div className="card horizontal">
                            <div className="card-image">
                            <img src={drinks} alt="drinks" />
                            </div>
                        <div className="card-stacked">
                            <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                            </div>
                        </div>
                        </div>
                </div>

                <div className="col s12 m7">
                    <h2 className="header">Snacks</h2>
                        <div className="card horizontal">
                            <div className="card-image">
                            <img src={snacks} alt="snacks" />
                            </div>
                        <div className="card-stacked">
                            <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                            </div>
                        </div>
                        </div>
                </div>

                <div className="col s12 m7">
                    <h2 className="header">Candy</h2>
                        <div className="card horizontal">
                            <div className="card-image">
                            <img src={candy} alt="candy" />
                            </div>
                        <div className="card-stacked">
                            <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                            </div>
                        </div>
                        </div>
                </div>

                <div className="col s12 m7">
                    <h2 className="header">Household Items</h2>
                        <div className="card horizontal">
                            <div className="card-image">
                            <img src={toiletries} alt="toiletries" />
                            </div>
                        <div className="card-stacked">
                            <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                            </div>
                        </div>
                        </div>
                </div>

            </div>
        );
    }
}

export default StoreItem;