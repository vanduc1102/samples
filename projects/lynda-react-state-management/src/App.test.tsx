import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Create React App v4-beta example with TypeScript', () => {
  render(<App />);
  const linkElement = screen.getByText(/Create React App v4-beta example with TypeScript/i);
  expect(linkElement).toBeTruthy();
});
