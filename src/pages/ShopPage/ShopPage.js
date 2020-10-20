import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route path={`${match.path}`} exact component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
