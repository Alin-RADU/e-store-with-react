import { connect } from 'react-redux';

import * as actions from '../../redux/actions/index';

import Button from '../UI/Button/Button';

import './CollectionItem.scss';

const CollectionItem = ({ item, onAddItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        inverted
        onClick={() => {
          onAddItem(item);
        }}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: (item) => dispatch(actions.addItemCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
