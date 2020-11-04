import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import withSpinner from '../../hoc/withSpinner/withSpinner';
import CollectionsOverview from './CollectionsOverview';

import { selectIsCollectionFetching } from '../../redux/selectors/shopSelectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

export default compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);
