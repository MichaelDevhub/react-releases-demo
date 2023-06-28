import React, {useCallback, useState} from 'react';
import {AppBar, Container, InputBase, Toolbar, Typography, useTheme} from '@mui/material';
import {Search} from "@mui/icons-material";
import {debounce} from "lodash";
import {AppDispatch, useAppDispatch} from "../../store";
import {fetchReleaseData, searchReleaseData} from "../../reducers/release-data/releaseDataRequests";

const Header: React.FC = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch() as AppDispatch;
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(() => event.target.value);
        debouncedChangeHandler(event.target.value);
    };

    const requestHandler = (value: string) => {
        console.log('Dispatch search request', value)
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
        <AppBar position="static" sx={{
            backgroundColor: 'light-grey',
            flexGrow: 1,
        }}>
            <Toolbar sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: theme.spacing(1),
                paddingTop: theme.spacing(1),
                minHeight: 'auto',

                [theme.breakpoints.up('sm')]: {
                    paddingBottom: 0,
                    paddingTop: 0,
                    flexDirection: 'row',
                },
            }}>
                <Typography variant="h6" sx={{
                    display: 'none',
                    flexGrow: 1,
                    flexShrink: 0,
                    [theme.breakpoints.up('sm')]: {
                        display: 'flex',
                    },
                }}>
                    react-releases-demo
                </Typography>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.common.white,
                    width: '100%',
                    transition: theme.transitions.create('width'),
                    [theme.breakpoints.up('sm')]: {
                        marginLeft: theme.spacing(2),
                    },
                    [theme.breakpoints.up('md')]: {
                        width: '40ch',
                    },
                }}>
                    <Search sx={{
                        color: theme.palette.primary.main,
                    }}/>
                    <InputBase
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
        </AppBar>
    );
};

export default Header;