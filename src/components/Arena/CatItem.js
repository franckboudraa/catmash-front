import React from 'react';
import SelectedCatMessage from './SelectedCatMessage';
import NotSelectedCatMessage from './NotSelectedCatMessage';

import { Card, Dimmer, Image, Loader } from 'semantic-ui-react';

const CatItem = props => {
  const { cat, index, swipeAnimation, winnerId } = props;
  return (
    <Card
      link
      key={cat.id}
      style={{ width: '300px' }}
      className={
        (index === 0 ? 'swipe-left ' : 'swipe-right ') +
        (swipeAnimation ? 'animit' : '')
      }
    >
      <Image
        className="thumbnail"
        centered
        circular
        bordered
        size="massive"
        as="img"
        src={cat.url}
        onClick={e => {
          props.voteForCat(cat.id, e);
        }}
      />
      {winnerId === cat.id ? (
        <SelectedCatMessage />
      ) : (
        <NotSelectedCatMessage winnerId={winnerId} />
      )}
    </Card>
  );
};

export default CatItem;
