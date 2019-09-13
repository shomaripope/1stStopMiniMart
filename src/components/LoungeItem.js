import React, { Component } from 'react';
import LoungePic from '../images/LoungeServicesPic.png';

class LoungeItem extends Component {
    render() {
        return (
            <div id="loungepics">
                <img src={LoungePic} alt="lounge Pic" id="loungepic"/>
                
            </div>
        );
    }
}

export default LoungeItem;