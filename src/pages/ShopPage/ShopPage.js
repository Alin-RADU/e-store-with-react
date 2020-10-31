import React, { lazy, Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../redux/actions/index';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverviewContainer')
);

const CollectionPageContainer = lazy(() =>
  import('../CollectionPage/CollectionPageContainer')
);

const ShopPage = ({ onFetchCollectionsAsync, match }) => {
  useEffect(() => {
    onFetchCollectionsAsync();
  }, [onFetchCollectionsAsync]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          path={`${match.path}`}
          exact
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onFetchCollectionsAsync: () => dispatch(actions.fetchCollectionsAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
