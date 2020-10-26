import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from './CollectionsOverview';

import { selectIsCollectionFetching } from '../../redux/selectors/shopSelectors';
import withSpinner from '../UI/withSpinner/withSpinner';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

export const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);
