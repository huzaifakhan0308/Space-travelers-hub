import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Rocket = () => (
  <div>
    <h1>Rocket</h1>
  </div>
);

describe('Rocket', () => {
  test('render React component', () => {
    render(<Rocket />);
    expect(screen.getByText('Rocket')).toBeInTheDocument();
  });
});
