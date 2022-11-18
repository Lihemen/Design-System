import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '.';

test('renders services text', () => {
  render(<Services />);
  const linkElement = screen.getByText(/services/i);
  expect(linkElement).toBeInTheDocument();
});
