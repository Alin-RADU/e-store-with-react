import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { selectShopForPreview } from '../../redux/selectors/shopSelectors';

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
  console.log('collections-', collections);
  const renderCollections = () => {
    return collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    });
  };
  return <div className="collections-overview">{renderCollections()}</div>;
};

const mapStateToProps = (state) => {
  return {
    collections: selectShopForPreview(state),
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
