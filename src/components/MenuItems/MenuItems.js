import React, { Component } from 'react';

import MenuItem from './MenuItem/MenuItem';

import './MenuItems.scss';

class MenuItems extends Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        size: '',
        id: 1,
        linkUrl: 'hats',
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: '',
        id: 2,
        linkUrl: 'jackets',
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: '',
        id: 3,
        linkUrl: 'sneakers',
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'womens',
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'mens',
      },
    ],
  };

  renderItems() {
    return this.state.sections.map(({ id, ...otherSectionProps }) => {
      return <MenuItem key={id} {...otherSectionProps} />;
    });
  }

  render() {
    return <div className="directory-menu">{this.renderItems()}</div>;
  }
}

export default MenuItems;
