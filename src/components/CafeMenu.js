import React, { Component } from 'react';
import Menu from '../images/CafeMenuPic.png'

class CafeMenu extends Component {
    render() {
        return (
            <div>
                <h1>CAFE MENU</h1>
                <img src={Menu} alt="menu" id="menu" />
            </div>
        );
    }
}

export default CafeMenu;