import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ErrorComponent from './ErrorComponent';

describe('ErrorComponent', () => {
    it('renders the error message', () => {
        const error = {
            message: 'Something went wrong',
        };
        const { getByTestId } = render(<ErrorComponent error={error} />);
        const errorMessageText = getByTestId('error-message-text');
        expect(errorMessageText).toBeInTheDocument();
        expect(errorMessageText).toHaveTextContent('Something went wrong');
    });

    it('renders the error icon', () => {
        const error = {
            message: 'Something went wrong',
        };
        const { getByTestId } = render(<ErrorComponent error={error} />);
        const errorMessageIcon = getByTestId('error-message-icon');
        expect(errorMessageIcon).toBeInTheDocument();
    });

    it('renders the error message container', () => {
        const error = {
            message: 'Something went wrong',
        };
        const { getByTestId } = render(<ErrorComponent error={error} />);
        const errorMessageContainer = getByTestId('error-message-container');
        expect(errorMessageContainer).toBeInTheDocument();
    });
});
