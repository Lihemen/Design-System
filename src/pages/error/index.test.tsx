import React from 'react';
import { render, screen } from '@testing-library/react';
import Error404 from '.';

test('renders Error404 text', () => {
  render(<Error404 />);
  const linkElement = screen.getByText(/Error404/i);
  expect(linkElement).toBeInTheDocument();
});
