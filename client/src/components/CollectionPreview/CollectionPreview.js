import { withRouter } from 'react-router-dom';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items, routeName, match, history }) => {
  const renderItems = () => {
    return items
      .filter((item, idx) => idx < 4)
      .map((item) => {
        return <CollectionItem key={item.id} item={item} />;
      });
  };

  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.url}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>

      <div className="preview">{renderItems()}</div>
    </div>
  );
};

export default withRouter(CollectionPreview);
