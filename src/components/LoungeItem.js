import React, { Component } from 'react';
import LoungePic from '../images/LoungeServicesPic.png';

class LoungeItem extends Component {
    render() {
        return (
            <div>
                <h1>Lounge Services:</h1>
                <img src={LoungePic} alt="lounge Pic" id="loungepic"/>
                
            </div>
        );
    }
}

export default LoungeItem;