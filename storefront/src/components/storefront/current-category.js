import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Electronic from './products';
import { switchCategory } from '../../store/product-store';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function currentCategory() {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product)
  const classes = useStyles();

  function showAll() {
    // dispatch the get() action
    dispatch(switchCategory());
  }

  function showFood() {
    // dispatch the switchCategory('food') action
    dispatch(switchCategory('food'))
  }

  function showElectronics() {
    // dispatch the switchCategory('electronic') action
    dispatch(switchCategory('Electronics'))
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <div>
        <button onClick={() => showAll()}>All</button>
        <button onClick={() => showFood()}>Food</button>
        <button onClick={() => showElectronics()}> Electronics</button>
      </div>
    </Grid>
  );
}

export default currentCategory;
