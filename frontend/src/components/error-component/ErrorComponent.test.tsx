import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorComponent from './ErrorComponent';

describe('ErrorComponent', () => {
    it('renders the error message', () => {
        const error = {
            message: 'Something went wrong',
        };
        render(<ErrorComponent error={error} />);
        const errorMessageText = screen.getByTestId('error-message-text');
        expect(errorMessageText).toBeInTheDocument();
        expect(errorMessageText).toHaveTextContent('Something went wrong');
    });

    it('renders the error icon', () => {
        const error = {
            message: 'Something went wrong',
        };
        render(<ErrorComponent error={error} />);
        const errorMessageIcon = screen.getByTestId('error-message-icon');
        expect(errorMessageIcon).toBeInTheDocument();
    });

    it('renders the error message container', () => {
        const error = {
            message: 'Something went wrong',
        };
        render(<ErrorComponent error={error} />);
        const errorMessageContainer = screen.getByTestId('error-message-container');
        expect(errorMessageContainer).toBeInTheDocument();
    });
});
