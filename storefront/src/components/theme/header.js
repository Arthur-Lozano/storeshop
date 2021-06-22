import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';


const theStyle = makeStyles => (theme => ({
  offset: theme.mixins.toolbar,
}))

const classes = theStyle();

export default function Header() {
  return (
    <AppBar position="static" >
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          OUR STORE
    </Typography>
        <Button color="inherit">
          {/* Login */}
        </Button>
      </Toolbar>
    </AppBar>)
}