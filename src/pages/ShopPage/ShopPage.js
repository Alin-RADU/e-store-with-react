import React, { Component } from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import SHOP_DATA from '../../assets/shopData';

class ShopPage extends Component {
  state = { collections: SHOP_DATA };

  renderCollections = () => {
    const { collections } = this.state;
    return collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    });
  };

  render() {
    return <div className="shop-page">{this.renderCollections()}</div>;
  }
}

export default ShopPage;
