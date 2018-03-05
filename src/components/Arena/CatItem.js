import React from 'react';
import SelectedCatMessage from './SelectedCatMessage';
import NotSelectedCatMessage from './NotSelectedCatMessage';

import { Card, Image } from 'semantic-ui-react';

const CatItem = props => {
  const { cat, index, swipeAnimation, selectedCat } = props;
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
      {selectedCat === cat.id ? (
        <SelectedCatMessage />
      ) : (
        <NotSelectedCatMessage id={selectedCat} />
      )}
    </Card>
  );
};

export default CatItem;
