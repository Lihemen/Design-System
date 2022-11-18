import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';

test('renders home text', () => {
  render(<Home />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
