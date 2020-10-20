import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import { selectShopCollections } from '../../redux/selectors/shopSelectors';

import './CollectionOverview.scss';

const CollectionOverview = ({ collections }) => {
  const renderCollections = () => {
    return collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    });
  };
  return <div className="collections-overview">{renderCollections()}</div>;
};

const mapStateToProps = (state) => {
  return {
    collections: selectShopCollections(state),
  };
};

export default connect(mapStateToProps)(CollectionOverview);
