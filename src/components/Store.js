import React, { Component } from 'react';
import StoreItem from './StoreItem';

class Store extends Component {
    render() {
        return (
            <div>
                <h4>
                    Drinks, Snacks, Sweets, Sandwiches, ATM? Whatever you need, we have it!
                    We also carry a wide variety of home and personal products for your convenience!
                </h4>
                <StoreItem />
            </div>
        );
    }
}

export default Store;