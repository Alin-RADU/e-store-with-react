import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CollectionPage from './CollectionPage';

import withSpinner from '../../components/UI/withSpinner/withSpinner';
import { selectIsCollectionsLoaded } from '../../redux/selectors/shopSelectors';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);
