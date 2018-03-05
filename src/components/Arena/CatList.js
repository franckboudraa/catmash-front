import React from 'react';
import { Card } from 'semantic-ui-react';

import CatItem from './CatItem';

const CatList = ({ cats, swipeAnimation, winnerId, voteForCat }) => {
  return (
    <Card.Group centered rows={2} className="radius">
      {cats.map((cat, index) => (
        <CatItem
          key={cat.id}
          {...{ cat, index, swipeAnimation, winnerId, voteForCat }}
        />
      ))}
    </Card.Group>
  );
};

export default CatList;
