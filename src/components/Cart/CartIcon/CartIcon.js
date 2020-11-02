import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/index';
import { selectCartItemsCount } from '../../../redux/selectors/cartSelectors';

import { ReactComponent as ShoppingIcon } from '../../../assets/svg/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = ({ onToggleCartHidden, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={onToggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsCount: selectCartItemsCount(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleCartHidden: () => dispatch(actions.toogleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
