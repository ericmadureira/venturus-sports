import React from 'react';
import { render } from '@testing-library/react';

import ListRow from '../../components/ListRow';
import { mockUser } from '../mockData';

test('renders provided username', () => {
  const { getByText } = render(
    <table>
      <tbody>
        <ListRow user={mockUser} />
      </tbody>
    </table>
  );
  const username = getByText(/mockman/i);
  expect(username).toBeInTheDocument();
});

test('renders provided name', () => {
  const { getByText } = render(
    <table>
      <tbody>
        <ListRow user={mockUser} />
      </tbody>
    </table>
  );
  const name = getByText(/Mock User/i);
  expect(name).toBeInTheDocument();
});
