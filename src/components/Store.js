import React, { Component } from 'react';
import StoreItem from './StoreItem';

class Store extends Component {
    render() {
        return (
            <div>
                <h1>STORE:</h1>
                <StoreItem />
            </div>
        );
    }
}

export default Store;