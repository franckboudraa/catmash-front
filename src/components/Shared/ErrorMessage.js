import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMessage = () => {
  return (
    <Message negative>
      <Message.Header>Meeow!</Message.Header>
      <p>An error occured while managing cats! Please try again!</p>
    </Message>
  );
};

export default ErrorMessage;
