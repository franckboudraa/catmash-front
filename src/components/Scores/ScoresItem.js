import React from 'react';

import { Card, Image, Icon } from 'semantic-ui-react';

const ScoresItem = ({ url, score }) => {
  return (
    <Card>
      <Image
        bordered
        circular
        className="thumbnail"
        as="img"
        src={url}
        style={{ width: '100%' }}
      />
      <Card.Content>
        Cuteness: <strong>{score}</strong> <Icon name="paw" />
      </Card.Content>
    </Card>
  );
};

export default ScoresItem;
