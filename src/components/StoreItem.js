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
                                <ul>
                                    <li>Water</li>
                                    <li>Juice</li>
                                    <li>Soda</li>
                                    <li>Tea</li>
                                    <li>Sports Drinks</li>
                                    <li>And More...!</li>
                                </ul>
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
                                <ul>
                                    <li>Chips</li>
                                    <li>Crackers</li>
                                    <li>Pastries</li>
                                    <li>Protein Bars</li>
                                    <li>Cup Noodles</li>
                                    <li>Cereal Cups</li>
                                    <li>Cookies</li>
                                    <li>And More...!</li>
                                </ul>
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
                                <ul>
                                    <li>Sweets</li>
                                    <li>Chocolates</li>
                                    <li>Gummies</li>
                                    <li>Candy Bars</li>
                                    <li>Suckers</li>
                                    <li>Cold/Flu Medicine</li>
                                    <li>Air Fresheners</li>
                                    <li>And More...!</li>
                                </ul>
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
                                <ul>
                                    <li>Pain/Allergy Meds</li>
                                    <li>Condoms</li>
                                    <li>Toiletries</li>
                                    <li>Deoderant/Body Spray</li>
                                    <li>Bleach/Detergent</li>
                                    <li>Cold/Flu Medicine</li>
                                    <li>Air Fresheners</li>
                                    <li>And More...!</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                </div>

            </div>
        );
    }
}

export default StoreItem;