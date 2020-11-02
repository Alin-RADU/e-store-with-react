import { lazy, Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../redux/actions/index';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverviewContainer')
);

const CollectionPageContainer = lazy(() =>
  import('../CollectionPage/CollectionPageContainer')
);

const ShopPage = ({ onFetchCollectionsAsync, onClearCollections, match }) => {
  useEffect(() => {
    onFetchCollectionsAsync();
    return () => onClearCollections();
  }, [onFetchCollectionsAsync, onClearCollections]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          path={`${match.path}`}
          exact
          component={CollectionsOverviewContainer}
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
  onClearCollections: () => dispatch(actions.clearCollections()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
