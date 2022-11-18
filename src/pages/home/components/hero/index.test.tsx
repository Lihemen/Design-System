import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '.';

test('renders Hero text', () => {
  render(<Hero />);
  const linkElement = screen.getByText(/Hero/i);
  expect(linkElement).toBeInTheDocument();
});
