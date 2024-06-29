import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';
import Grid from '@mui/material/Grid';
import { useState, useEffect, useRef } from 'react';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/view-program' },
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'Internships', path: '/Internship' },
    { name: 'Our Team', path: '/our-team' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Login', path: '/login' },
];

const skills = [
    { name: 'JavaScript', path: '/view-program', domain: 'CSE' },
    { name: 'Python', path: '/view-program', domain: 'CSE' },
    { name: 'React', path: '/view-program', domain: 'CSE' },
    { name: 'Node.js', path: '/view-program', domain: 'CSE' },
    { name: 'Machine Learning', path: '/view-program', domain: 'CSE' },
    { name: 'Data Structures', path: '/view-program', domain: 'CSE' },
    { name: 'Algorithms', path: '/view-program', domain: 'CSE' },
    { name: 'Database Management', path: '/view-program', domain: 'CSE' },
    { name: 'Network Security', path: '/view-program', domain: 'CSE' },
    { name: 'Digital Signal Processing', path: '/view-program', domain: 'ECE' },
    { name: 'VLSI Design', path: '/view-program', domain: 'ECE' },
    { name: 'Control Systems', path: '/view-program', domain: 'Mechanical' },
    { name: 'Robotics', path: '/view-program', domain: 'Mechanical' },
    { name: 'Cloud Computing', path: '/view-program', domain: 'CSE' },
    { name: 'IoT', path: '/view-program', domain: 'CSE' },
    { name: 'Cyber Security', path: '/view-program', domain: 'CSE' },
    { name: 'Blockchain', path: '/view-program', domain: 'CSE' },
    { name: 'Full Stack Development', path: '/view-program', domain: 'CSE' },
    { name: 'Embedded Systems', path: '/view-program', domain: 'ECE' },
    { name: 'Mechanical Design', path: '/view-program', domain: 'Mechanical' },
    { name: 'Geoinformatics', path: '/view-program', domain: 'Civil' },
    { name: 'Construction Management', path: '/view-program', domain: 'Civil' },
    { name: 'Digital Marketing', path: '/view-program', domain: 'Marketing' },
    { name: 'Product Management', path: '/view-program', domain: 'Business' },
    { name: 'Project Management', path: '/view-program', domain: 'Business' },
    { name: 'Strategic Consulting', path: '/view-program', domain: 'Business' },
    { name: 'Market Research', path: '/view-program', domain: 'Marketing' },
    { name: 'AI Ethics', path: '/view-program', domain: 'CSE' },
    { name: 'Supply Chain Management', path: '/view-program', domain: 'Business' },
    { name: 'Financial Technology', path: '/view-program', domain: 'Finance' },
];

function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [openSkillsMenu, setOpenSkillsMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const anchorRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleToggleSkillsMenu = (event) => {
        event.preventDefault(); // Prevent default navigation behavior
        setOpenSkillsMenu(true);
    };

    const handleCloseSkillsMenu = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpenSkillsMenu(false);
    };

    const handleMenuItemClick = (path, domain) => {
        navigate(`${path}?domain=${domain}`);
        setOpenSkillsMenu(false);
        setAnchorElNav(null); // Close the navigation menu after selection
    };

    return (
        <AppBar position="fixed" sx={{ fontFamily: 'Roboto, sans-serif', backgroundColor: scrollPosition > 50 ? 'rgba(21, 101, 192, 0.7)' : '#0D47A1', transition: 'background-color 0.3s ease' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        sx={{
                            height: 50,
                            mr: 2,
                            width: 100
                        }}
                        alt="AI Mentor Logo"
                        src='/Media.png'
                    />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                        component={Link}
                                        to={page.path}
                                        sx={{
                                            textTransform: 'uppercase',
                                            fontFamily: 'Roboto, sans-serif',
                                            textDecoration: 'none',
                                            color: 'black', // Black text color
                                            '&:hover': {
                                                backgroundColor: '#1565C0', // Dark blue hover effect
                                            },
                                        }}
                                    >
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 2 }}>
                        {pages.map((page) => (
                            page.name === 'Skills' ? (
                                <Box
                                    key={page.name}
                                    ref={anchorRef}
                                    onMouseEnter={handleToggleSkillsMenu}
                                    sx={{ position: 'relative' }}
                                >
                                    <Button
                                        sx={{
                                            my: 2,
                                            color: 'white',
                                            display: 'block',
                                            textTransform: 'uppercase',
                                            fontFamily: 'Roboto, sans-serif',
                                            '&:hover': {
                                                backgroundColor: '#1565C0', // Dark blue hover effect
                                            },
                                        }}
                                    >
                                        {page.name}
                                    </Button>
                                    <Popper
                                        open={openSkillsMenu}
                                        anchorEl={anchorRef.current}
                                        role={undefined}
                                        transition
                                        disablePortal
                                        modifiers={[
                                            {
                                                name: 'offset',
                                                options: {
                                                    offset: [0, 10],
                                                },
                                            },
                                        ]}
                                    >
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin:
                                                        placement === 'bottom' ? 'center top' : 'center bottom',
                                                }}
                                            >
                                                <Paper sx={{ width: 500, maxHeight: 400, overflowY: 'auto' }}>
                                                    <ClickAwayListener onClickAway={handleCloseSkillsMenu}>
                                                        <MenuList autoFocusItem={openSkillsMenu} id="menu-list-grow">
                                                            <Grid container spacing={2} sx={{ padding: 2 }}>
                                                                {skills.map((skill, index) => (
                                                                    <Grid item xs={6} key={index}>
                                                                        <MenuItem
                                                                            onClick={() => handleMenuItemClick(skill.path, skill.domain)}
                                                                            sx={{
                                                                                '&:hover': {
                                                                                    backgroundColor: '#1565C0', // Dark blue hover effect
                                                                                },
                                                                            }}
                                                                        >
                                                                            {skill.name}
                                                                        </MenuItem>
                                                                    </Grid>
                                                                ))}
                                                            </Grid>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </Box>
                            ) : (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    to={page.path}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        textTransform: 'uppercase',
                                        fontFamily: 'Roboto, sans-serif',
                                        '&:hover': {
                                            backgroundColor: '#1565C0', // Dark blue hover effect
                                        },
                                    }}
                                >
                                    {page.name}
                                </Button>
                            )
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
