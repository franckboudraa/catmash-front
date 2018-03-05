import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const NotSelectedCatMessage = ({ winnerId }) => {
  if (winnerId === 0) {
    return '';
  } else {
    return (
      <Card.Content>
        <Card.Description style={{ textAlign: 'center' }}>
          <Icon color="red" size="massive" name="remove circle" />
        </Card.Description>
      </Card.Content>
    );
  }
};

export default NotSelectedCatMessage;
