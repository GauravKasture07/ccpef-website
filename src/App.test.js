import { render, screen } from '@testing-library/react';
import App from './App';

test('renders foundation hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /greener planet through[\s\S]*collective community\s+action/i,
  });
  expect(heading).toBeInTheDocument();
});
