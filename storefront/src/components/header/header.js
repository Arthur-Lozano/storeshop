import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color: {
    backgroundcolor: 'white',
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const product = useSelector(state => state.product);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <h1>OUR STORE</h1>
          <Typography variant="h6" className={classes.title}>
            {/* Good example of passing in current state of items */}
            {/* Showing {product.length} people ... */}
          </Typography>
          <Button color="inherit">Cart{product.count}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
