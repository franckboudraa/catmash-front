import React from 'react';
import ScoresItem from './ScoresItem';

import { Card } from 'semantic-ui-react';

const ScoresList = ({ cats, sortByAsc }) => {
  sortByAsc === true
    ? cats.sort(function(a, b) {
        return a.score - b.score;
      })
    : cats.sort(function(a, b) {
        return b.score - a.score;
      });
  return (
    <Card.Group stackable centered itemsPerRow={3} className="radius">
      {cats.map(cat => {
        return <ScoresItem key={cat.id} {...cat} />;
      })}
    </Card.Group>
  );
};

export default ScoresList;
