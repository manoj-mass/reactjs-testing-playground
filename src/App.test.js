import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react testing app', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react testing/i);
  expect(linkElement).toBeInTheDocument();
});
