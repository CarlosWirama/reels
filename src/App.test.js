import { render, screen } from '@testing-library/react';

import App from './App';

test('renders Show Reels', () => {
  render(<App />);
  expect(screen.getByText(/show reels/i)).toBeInTheDocument();
  expect(screen.getByText(/gallery/i)).toBeInTheDocument();
});
