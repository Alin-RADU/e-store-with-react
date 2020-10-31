import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from './CollectionsOverview';

import { selectIsCollectionFetching } from '../../redux/selectors/shopSelectors';
import withSpinner from '../../hoc/withSpinner/withSpinner';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
