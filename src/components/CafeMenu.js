import React, { Component } from 'react';
import Menu from '../images/NewMenu.jpg';
import Menu2 from '../images/CafeMenuPic2.png';
import { NavLink } from 'react-router-dom';

class CafeMenu extends Component {
    render() {
        return (
            <div className="col s12 m7">
                <h5>
                    Come try our expanding menu with some of the best
                    breakfast, lunch, dinner, and comfort foods in Atlanta!
                </h5>
                
                <NavLink to='/weeklyspecials' className="btn waves-effect waves-light blue lighten-1"> Weekly Specials </NavLink>

                    <div>
                        <h1 className="title center">CAFE MENU</h1>
                        <img src={Menu} alt="menu" id="menu" />
                        <h1 className="title center">VEGAN MENU</h1>
                        <img src={Menu2} alt="menu2" id="menu2" />
                    </div>
            </div>
        );
    }
}


export default CafeMenu;