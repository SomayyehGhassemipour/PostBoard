import { fireEvent, render } from '@testing-library/react';
import Authenication from './Authenication';
import { act } from 'react-dom/test-utils';

test('Update state on email input change', () => {
	const { getByPlaceholderText, getByTestId } = render(<Authenication />);
	const emailInputNode = getByPlaceholderText('Email');

	act(() => {
		fireEvent.change(emailInputNode, { target: { value: 'somi@gmail.com' } });
	});

	const authComponent = getByTestId('authenication-component');

	expect(authComponent.setAttribute.value).toBe('somi@gmail.com');
});
