import React, { Component } from 'react';
import SHOP_DATA from '../shop/shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';


class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: SHOP_DATA
        }
    }


    render() {
        const {collection} = this.state;
        return (
            <div className="shop-page">
                {
                    collection.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;