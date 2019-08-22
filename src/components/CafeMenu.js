import React, { Component } from 'react';
import Menu from '../images/CafeMenuPic.png';
import Menu2 from '../images/CafeMenuPic2.png'

class CafeMenu extends Component {
    render() {
        return (
            <div>
                <h1 className="title center">CAFE MENU</h1>
                <img src={Menu} alt="menu" id="menu" />
                <h1 className="title center">VEGAN MENU</h1>
                <img src={Menu2} alt="menu2" id="menu2" />
            </div>
        );
    }
}

export default CafeMenu;