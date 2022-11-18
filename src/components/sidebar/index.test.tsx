import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '.';

test('renders Sidebar text', () => {
  render(<Sidebar />);
  const linkElement = screen.getByText(/Sidebar/i);
  expect(linkElement).toBeInTheDocument();
});
