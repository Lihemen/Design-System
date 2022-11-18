import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '.';

test('renders Navbar text', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Navbar/i);
  expect(linkElement).toBeInTheDocument();
});
