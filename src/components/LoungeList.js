import React, { Component } from 'react';
import LoungeItem from './LoungeItem';
import LoungePic2 from '../images/IMG950497.jpg';
import LoungePic3 from '../images/loungeservicespic2.jpg';
import { NavLink } from 'react-router-dom';


class LoungeList extends Component {
    render() {
        return (
            <div className="container">
                <NavLink to='/weeklyevents' className="btn waves-effect waves-light blue lighten-1"> Weekly Lounge Event Schedule </NavLink>
                
                <div className="col s12 m7">
                    <h2 className="header">Outdoor Seating</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                        <img className="responsive-img" src={LoungePic3} alt="outdoor seating" />
                        </div>
                    </div>
                </div>
                
                <div className="col s12 m7">
                    <h2 className="header">Evening Activities</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                        <img className="responsive-img" src={LoungePic2} alt="evening activities" />
                        </div>
                    </div>
                </div>

                <LoungeItem />

            </div>
        );
    }
}

export default LoungeList;