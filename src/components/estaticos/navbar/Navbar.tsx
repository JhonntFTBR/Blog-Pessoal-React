import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    return (
        <>
            <AppBar position="static"  >
                <Toolbar variant="dense" >
                    <Link to='/home'>
                        <Box className='cursor'>
                            <Typography variant="h5" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Quem somos
                            </Typography>
                        </Box>
                        <Link to='/posts'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Mural
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" >
                                Agendamentos
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" >
                                    Logout
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>

        </>

    )
}
export default Navbar;