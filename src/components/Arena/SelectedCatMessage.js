import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const SelectedCatMessage = () => (
  <Card.Content>
    <Card.Description style={{ textAlign: 'center' }}>
      <Icon color="green" size="massive" name="check circle" />
    </Card.Description>
  </Card.Content>
);

export default SelectedCatMessage;
