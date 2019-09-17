import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../images/NewMenu.jpg';
import Menu2 from '../images/CafeMenuPic2.png';
// import Food from '../images/CafeCoffeePic.png';
// import Food2 from '../images/CafeFoodPic.png';
// import Food3 from '../images/CafeFoodPic3.png';

class CafeMenu extends Component {
    render() {
        return (
            <div className="col s12 m7">
                <h4>
                    Come try our expanding menu with some of the best
                    breakfast, lunch, dinner, and comfort foods in Atlanta!
                </h4>
                <NavLink to='/weeklyspecials' className="btn waves-effect waves-light blue lighten-1"> Weekly Specials </NavLink>
                
                {/* <div className="col s12 m7">
                    <h2 className="header">Menu Pics</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                        <img src={Food} alt="food image1" />
                        </div>
                        <div className="card-image">
                        <img src={Food2} alt="food image2" />
                        </div>
                        <div className="card-image">
                        <img src={Food3} alt="food image3" />
                        </div>
                    </div>
                </div> */}

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