import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '.';

test('renders About text', () => {
  render(<About />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
