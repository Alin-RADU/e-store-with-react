import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { CollectionOverviewContainer } from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import { CollectionPageContainer } from '../CollectionPage/CollectionPageContainer';

import * as actions from '../../redux/actions/index';

const ShopPage = ({ onFetchCollectionsAsync, match }) => {
  useEffect(() => {
    onFetchCollectionsAsync();
  }, [onFetchCollectionsAsync]);

  return (
    <div className="shop-page">
      <Route
        path={`${match.path}`}
        exact
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onFetchCollectionsAsync: () => dispatch(actions.fetchCollectionsAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
