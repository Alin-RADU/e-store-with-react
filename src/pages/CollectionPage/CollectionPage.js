import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import { selectCollection } from '../../redux/selectors/shopSelectors';

import './CollectionPage.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  const renderItems = () => {
    return items.map((item) => {
      return <CollectionItem key={item.id} item={item} />;
    });
  };

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">{renderItems()}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
