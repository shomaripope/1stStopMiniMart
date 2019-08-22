import React, { Component } from 'react';
import LoungeItem from './LoungeItem';

class LoungeList extends Component {
    render() {
        return (
            <div className="container">
                <LoungeItem />
            </div>
        );
    }
}

export default LoungeList;