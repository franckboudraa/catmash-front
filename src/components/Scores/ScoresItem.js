import React from 'react';

import { Card, Image, Icon } from 'semantic-ui-react';

const ScoresItem = ({ url, score, pos }) => {
  let position;
  let trophyColor;
  switch (pos) {
    case 1:
      position = 'The Cuttiest';
      trophyColor = 'yellow';
      break;
    case 2:
      position = 'The Challenger';
      trophyColor = 'grey';
      break;
    case 3:
      position = 'Very Cute Too!';
      trophyColor = 'brown';
      break;
    default:
      position = '';
  }
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
        <p>
          <span className="righteous font-185rem">
            {pos >= 1 && pos <= 3 ? (
              <Icon color={trophyColor} name="trophy" />
            ) : (
              <strong>#{pos}</strong>
            )}{' '}
            {position}
          </span>
        </p>
        <p>
          Cuteness: <strong>{score}</strong> <Icon name="paw" />
        </p>
      </Card.Content>
    </Card>
  );
};

export default ScoresItem;
