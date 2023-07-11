import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Login Page', () => {
	render(<App />);
	const title = screen.getByText(/Login/i);
	expect(title).toBeInTheDocument();
});
