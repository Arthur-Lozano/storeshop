import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Electronic from './products';
import { get } from '../../store/product-store';

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
    dispatch(get());
  }

  function showFood() {
    // dispatch the get('food') action
    dispatch(get('food'))
  }

  function showElectronics() {
    // dispatch the get('electronic') action
    dispatch(get('electronic'))
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <div>
        <button onClick={showAll}>All</button>
        <button onClick={showFood}>Food</button>
        <button onClick={showElectronics} > Electronics</button>
      </div>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {product.map((data, idx) => (
            <Grid key={idx} item>
              <Electronic person={data} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default currentCategory;
