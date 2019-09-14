import React, { Component } from 'react';
import StoreItem from './StoreItem';

class Store extends Component {
    render() {
        return (
            <div>
                <h5>
                    Drinks, Snacks, Sweets, Sandwiches, ATM? Whatever you need, we have it!
                    We also carry a wide variety of home and personal products for your convenience!
                </h5>
                <StoreItem />
            </div>
        );
    }
}

export default Store;