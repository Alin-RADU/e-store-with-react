import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/index';

import './Backdrop.scss';

const Backdrop = ({ show, onClick }) =>
  show && <div className="backdrop" onClick={onClick}></div>;

const mapStateToProps = (dispatch) => ({
  onClick: () => dispatch(actions.toogleCartHidden()),
});

export default connect(null, mapStateToProps)(Backdrop);
