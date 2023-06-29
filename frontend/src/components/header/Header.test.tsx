import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, waitFor} from '@testing-library/react';
import Header from './Header';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {fetchReleaseData} from "../../reducers/release-data/releaseDataRequests";

describe('Header', () => {
    const mockStore = configureStore([]);

    it('dispatches searchReleaseData when search input changes', () => {
        const store = mockStore({});
        store.dispatch = jest.fn();

        const {getByPlaceholderText} = render(
            <Provider store={store}>
                <Header/>
            </Provider>
        );

        const searchInput = getByPlaceholderText('Search…');
        fireEvent.change(searchInput, {target: {value: 'example'}});

        waitFor(() => {
            expect(store.dispatch).toHaveBeenCalledWith(fetchReleaseData());
        });
    });

    it('dispatches fetchReleaseData when search input is cleared', () => {
        const store = mockStore({});
        store.dispatch = jest.fn();

        const {getByPlaceholderText} = render(
            <Provider store={store}>
                <Header/>
            </Provider>
        );

        const searchInput = getByPlaceholderText('Search…');
        fireEvent.change(searchInput, {target: {value: 'example'}});
        fireEvent.change(searchInput, {target: {value: ''}});

        waitFor(() => {
            expect(store.dispatch).toHaveBeenCalledWith(fetchReleaseData());
        });
    });
});
