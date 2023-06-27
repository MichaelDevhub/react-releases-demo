import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, InputBase, useTheme, Container} from '@mui/material';
import {Search} from "@mui/icons-material";

const Header: React.FC = () => {
    const theme = useTheme();
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <AppBar position="static" sx={{
            backgroundColor: 'light-grey',
            flexGrow: 1,
        }}>
            <Toolbar>
                <Typography variant="h6" sx={{
                    flexGrow: 1,
                    flexShrink: 0,
                }}>
                    react-releases-demo
                </Typography>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.common.white,
                    marginRight: theme.spacing(2),
                    marginLeft: theme.spacing(2),
                    width: '100%',
                    transition: theme.transitions.create('width'),
                    [theme.breakpoints.up('md')]: {
                        width: '40ch',
                        marginLeft: theme.spacing(3),
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
                        onChange={handleSearchChange}
                    />
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;