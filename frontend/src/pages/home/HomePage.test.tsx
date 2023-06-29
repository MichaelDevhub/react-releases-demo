import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {IDataState} from '../../types/data.types';
import {STATUS} from '../../types/status.types';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {FETCH_RELEASE_DATA_URL} from '../../reducers/release-data/releaseDataRequests';
import {testDataReleases} from '../../test-data/releases.test.data';
import {SnackbarProvider} from "notistack";

describe('HomePage', () => {
    let mockAxios: MockAdapter;
    const mockStore = configureStore([]);

    const initialState: IDataState = {
        status: STATUS.IDLE,
        data: [],
        error: null,
    };

    beforeAll(() => {
        mockAxios = new MockAdapter(axios);
    });

    afterAll(() => {
        mockAxios.restore();
    });

    it('renders loading container when status is idle', () => {
        const store = mockStore({data: initialState, theme: {mode: 'light'}});
        store.dispatch = jest.fn();

        mockAxios.onGet(FETCH_RELEASE_DATA_URL).reply(200, testDataReleases);
        const {getByTestId} = render(
            <SnackbarProvider>
                <Provider store={store}>
                    <HomePage/>
                </Provider>
            </SnackbarProvider>
        );

        const loadingContainer = getByTestId('loading-container');
        expect(loadingContainer).toBeInTheDocument();
        expect(store.dispatch).toHaveBeenCalled();
    });

    it('renders release card container when status is success', () => {
        const mockData = [
            {id: 1, title: 'Release 1'},
            {id: 2, title: 'Release 2'},
        ];
        const store = mockStore({
            data: {
                ...initialState,
                status: STATUS.SUCCESS,
                data: mockData,
            },
            theme: {mode: 'light'}
        });
        const {getByTestId} = render(
            <SnackbarProvider>
                <Provider store={store}>
                    <HomePage/>
                </Provider>
            </SnackbarProvider>
        );

        const releaseCardContainer = getByTestId('release-card-container');
        expect(releaseCardContainer).toBeInTheDocument();
    });

    it('renders error message component when status is failed with error', () => {
        const error = {message: 'Something went wrong'};
        const store = mockStore({
            data: {
                ...initialState,
                status: STATUS.FAILED,
                error: error,
            },
            theme: {mode: 'light'}
        });
        const {getByTestId} = render(
            <SnackbarProvider>
                <Provider store={store}>
                    <HomePage/>
                </Provider>
            </SnackbarProvider>
        );

        const errorMessage = getByTestId('error-message-container');
        expect(errorMessage).toBeInTheDocument();
    });
});
