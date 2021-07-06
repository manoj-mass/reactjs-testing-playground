import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

const setUp = () => render(<Counter />);

beforeEach(() => {
    setUp()
})

describe('test counter app', () => {
    it('check h1 available', () => {
        const linkElement = screen.getByText(/Current count is/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('check button available', () => {
        const linkElement = screen.getByText(/Increment/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('check increment', () => {
        userEvent.click(screen.getByText(/Increment/i));
        const lable = screen.getByTestId(/counterID/i);
        expect(lable.textContent).toBe("1");
    });
});
