import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">
                            New Todo
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar