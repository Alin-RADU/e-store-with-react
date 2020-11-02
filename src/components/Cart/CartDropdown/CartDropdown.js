import { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';

import CartItems from '../CartItems/CartItems';
import Button from '../../UI/Button/Button';
import Backdrop from '../../UI/Backdrop/Backdrop';

import * as actions from '../../../redux/actions/cartAction';
import { selectCartHidden } from '../../../redux/selectors/cartSelectors';

import './CartDropdown.scss';

const ANIMATION_TIMING = {
  enter: 450,
  exit: 450,
};

const CartDropdown = ({ history, dispatch, showCartToggle }) => {
  const renderCart = () => (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={showCartToggle}
      timeout={ANIMATION_TIMING}
      classNames="fade-slide"
    >
      <div className="cart-dropdown">
        <CartItems />
        <Button onClick={onClickHandler}>GO TO CHECKOUT</Button>
      </div>
    </CSSTransition>
  );

  const onClickHandler = () => {
    history.push('/checkout');
    dispatch(actions.toogleCartHidden());
  };

  return (
    <Fragment>
      <Backdrop show={showCartToggle} />
      {renderCart()}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  showCartToggle: selectCartHidden(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
