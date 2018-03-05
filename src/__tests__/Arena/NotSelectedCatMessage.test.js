import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import NotSelectedCatMessage from '../../components/Arena/NotSelectedCatMessage';

describe('NotSelectedCatMessage', () => {
  test('it renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <NotSelectedCatMessage />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
