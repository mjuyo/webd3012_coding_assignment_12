import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders text component', () => {
  render(<Text content="Sample text" />);
  expect(screen.getByText('Sample text')).toBeVisible();
});

test('button is disabled', () => {
  render(<Text content="Sample text" disabled />);
  const text = screen.getByText('Sample text');
  expect(text).toHaveStyle('cursor: not-allowed');
  expect(text).toHaveStyle('background-color: #ccc');
});
