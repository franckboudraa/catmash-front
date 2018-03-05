import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMessage = () => {
  return (
    <Message negative>
      <Message.Header>Meeow!</Message.Header>
      <p>An error occured while loading cats!</p>
    </Message>
  );
};

export default ErrorMessage;
