import React from 'react';

import { Card, Image, Icon } from 'semantic-ui-react';

const ScoresItem = ({ url, score }) => {
  return (
    <Card link>
      <Image bordered circular className="thumbnail" as="img" src={url} />
      <Card.Content>
        Cuteness: <strong>{score}</strong> <Icon name="paw" />
      </Card.Content>
    </Card>
  );
};

export default ScoresItem;
