import React, {useCallback, useState} from 'react';
import {AppBar, Container, InputBase, Toolbar, useTheme} from '@mui/material';
import {Search} from "@mui/icons-material";
import {debounce} from "lodash";
import {AppDispatch, useAppDispatch} from "../../store";
import {fetchReleaseData, searchReleaseData} from "../../reducers/release-data/releaseDataRequests";
import ThemeSwitchButton from "../theme-switch-button/ThemeSwitchButton";

const Header = () => {
    const theme = useTheme();
    const dispatch: AppDispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(() => event.target.value);
        debouncedChangeHandler(event.target.value);
    };

    const requestHandler = (value: string) => {
        if (value && value.length > 0) {
            dispatch(searchReleaseData(value));
        } else {
            dispatch(fetchReleaseData());
        }
    }

    const debouncedChangeHandler = useCallback(
        debounce(requestHandler, 500)
        , []);

    return (
        <AppBar position="sticky" data-testid="header-app-bar">
            <Container>
                <Toolbar sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: theme.spacing(1, 0, 1, 0),
                    minHeight: 'auto',
                    [theme.breakpoints.up('sm')]: {
                        padding: theme.spacing(0, 0, 0, 0),
                    },
                }}>
                    <ThemeSwitchButton data-testid="header-theme-switch-button"/>
                    <Container
                        data-testid="header-search-bar"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            borderRadius: theme.shape.borderRadius,
                            backgroundColor: theme.palette.common.white,
                            width: '100%',
                            marginLeft: theme.spacing(2),
                            transition: theme.transitions.create('width'),
                            marginRight: 0,
                            [theme.breakpoints.up('md')]: {
                                width: '40ch',
                            },
                        }}>
                        <Search
                            data-testid="header-search-icon"
                            sx={{
                                color: theme.palette.primary.main,
                            }}/>
                        <InputBase
                            data-testid="search-input"
                            placeholder="Search…"
                            sx={{
                                flex: 1,
                                color: theme.palette.primary.main,
                                padding: theme.spacing(1, 1, 1, 1),
                            }}
                            value={searchValue}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSearchChange(event)}
                        />
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;