import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { selectShopForPreview } from '../../redux/selectors/shopSelectors';

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
  const renderCollections = () =>
    collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ));

  return <div className="collections-overview">{renderCollections()}</div>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
