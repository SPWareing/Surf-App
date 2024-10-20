import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Images link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Images/i);
  expect(linkElement).toBeInTheDocument();
});
