import React from 'react';
import { Card } from 'semantic-ui-react';

import CatItem from './CatItem';

const CatList = ({ cats, swipeAnimation, selectedCat, voteForCat }) => {
  return (
    <Card.Group centered rows={2} className="radius">
      {cats.map((cat, index) => (
        <CatItem
          key={cat.id}
          {...{ cat, index, swipeAnimation, selectedCat, voteForCat }}
        />
      ))}
    </Card.Group>
  );
};

export default CatList;
