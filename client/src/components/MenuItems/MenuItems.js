import { connect } from 'react-redux';

import MenuItem from './MenuItem/MenuItem';

import { selectMenuItemsSections } from '../../redux/selectors/menuItemsSelectors';

import './MenuItems.scss';

const MenuItems = ({ sections }) => {
  const renderItems = () => {
    return sections.map(({ id, ...otherSectionProps }) => {
      return <MenuItem key={id} {...otherSectionProps} />;
    });
  };

  return <div className="directory-menu">{renderItems()}</div>;
};

const mapStateToProps = (state) => {
  return {
    sections: selectMenuItemsSections(state),
  };
};

export default connect(mapStateToProps)(MenuItems);
