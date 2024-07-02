import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const pages = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Film Industry',
        url: '/film_industry'
    },
    {
        name: 'Business',
        url: '/business'
    },
    {
        name: 'Sports',
        url: '/sports'
    },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header1 = () => {
    const scrolltoHash = function (element_id) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className='bg-black p-[5px]'></div>
            <AppBar position="static" sx={{ backgroundColor: 'transparent' }} className="max-w-[1024px] mx-auto mt-5">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <div className='flex'>
                            <div>
                                <img className="flex mr-1 h-[40px] w-[105px] min-w-[36px]" src="/assets/images/logo.png" alt="" />
                            </div>
                            <div className='ml-2'>
                                <Typography
                                    className='flex'
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    // href="#app-bar-with-responsive-menu"
                                    sx={{
                                        // display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'Spacegrotesk',
                                        fontWeight: 700,
                                        // letterSpacing: '.3rem',
                                        color: 'black',
                                        textDecoration: 'none',
                                        lineHeight: '22px'
                                    }}
                                >
                                    Clestrx
                                </Typography>
                                <Typography
                                    className='flex'
                                    variant="caption"
                                    noWrap
                                    component="a"
                                    // href="#app-bar-with-responsive-menu"
                                    sx={{
                                        // display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'Helvetica',
                                        letterSpacing: 'normal',
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Discover the World of Celebrities.
                                </Typography>
                            </div>
                        </div>
                        {/* <div className="hidden md:flex">
                        <h1 className='text-[23px] font-semibold leading-7'>Clestrix</h1>
                        <p className='text-[13px]'>Discover the World of Celebrities.</p>
                    </div> */}
                        <div className='flex lg:hidden w-full'>
                            <Box sx={{ flexGrow: 1, display: { lg: 'none', md: 'flex', xs: 'flex' } }}>
                                <IconButton
                                    style={{ marginLeft: 'auto', marginRight: '0px' }}
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={toggleDrawer}
                                    color="black"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </div>

                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

                        {/* <div className="flex md:hidden">
                        <h1 className='text-[23px] font-semibold leading-7'>Clestrix</h1>
                        <p className='text-[13px]'>Discover the World of Celebrities.</p>
                    </div> */}
                        <div className='hidden lg:flex justify-end w-full'>
                            {pages.map((page, index) => {
                                return (
                                    <a
                                        key={index}
                                        href={page?.url}
                                        style={{ textDecoration: 'none', color: 'black' }}
                                    >
                                        <Button sx={{ my: 2, display: 'block' }}>
                                            {page?.name}
                                        </Button>
                                    </a>
                                )
                            })}
                            <a onClick={() => scrolltoHash('contact_us')} style={{ textDecoration: 'none', color: 'black' }}>
                                <Button sx={{ my: 2, display: 'block' }}>Contact</Button>
                            </a>
                            <a href="/pricing" className='flex justify-center items-center'>
                                <button className='join_clestrx join_clestrx_2 ml-4'>Join Clestrx</button>
                            </a>
                        </div>

                        {/* <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                                </Tooltip>
                                <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                                </Menu>
                            </Box> */}
                    </Toolbar>
                    <div className='LogoBar'></div>
                </Container>
            </AppBar >

            <Drawer
                className='top_drawer'
                anchor="top"
                open={open}
                onClose={toggleDrawer}
                variant="temporary"
                sx={{
                    width: '100vw',
                    height: '100vh',
                    '& .MuiDrawer-paper': {
                        width: '100vw',
                        height: '100vh',
                        boxSizing: 'border-box',
                    },
                }}
            >
                <div className='flex justify-end p-[25px]'>
                    <CloseIcon onClick={toggleDrawer} />
                </div>
                <List className='p-[15px]'>
                    {/* <ListItem>
                        <ListItemText>
                            <Typography variant="h6">Clestrx</Typography>
                        </ListItemText>
                    </ListItem> */}
                    {pages.map((page, index) => {
                        return (
                            <ListItem key={index} className='py-[15px]'>
                                <a href={page?.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Typography variant='h5' className='font-bold' textAlign="center">{page?.name}</Typography>
                                </a>
                            </ListItem>
                        )
                    })}
                    <ListItem className='py-[15px]'>
                        <a onClick={() => scrolltoHash('contact_us')} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant='h5' className='font-bold' textAlign="center">Contact</Typography>
                        </a>
                    </ListItem>
                    <ListItem className='py-[25px]'>
                        <a href="/pricing">
                            <button className='join_clestrx join_clestrx_2'>Join Clestrx</button>
                        </a>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};
export default Header1;
