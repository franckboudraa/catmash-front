import React from 'react';
import { Card } from 'semantic-ui-react';

import CatItem from './CatItem';

const CatList = ({ cats, swipeAnimation, winnerId, voteForCat, loading }) => {
  return (
    <Card.Group centered itemsPerRow={2} className="radius">
      {cats.map((cat, index) => (
        <CatItem
          key={cat.id}
          {...{ cat, index, swipeAnimation, winnerId, voteForCat, loading }}
        />
      ))}
    </Card.Group>
  );
};

export default CatList;
