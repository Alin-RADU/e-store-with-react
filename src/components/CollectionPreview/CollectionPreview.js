import React from 'react';

import CollectionItem from './ColectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  const renderItems = () => {
    return items
      .filter((item, idx) => idx < 4)
      .map(({ id, ...otherItemProps }) => {
        return <CollectionItem key={id} {...otherItemProps} />;
      });
  };

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{renderItems()}</div>
    </div>
  );
};

export default CollectionPreview;
