import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 335,
    margin: "1rem",
  },
  media: {
    height: 145,
  },
  keyboard: {
    backgroundColor: "yellow"
  }
});

function Electronic(props) {
  const items = useSelector((state) => state.product);
  const classes = useStyles();


  console.log(items)
  return (
    <Grid container>
      {
        items && items.map(item =>
          <Grid item md={4}>
            <Card className={classes.root}>
              <CardActionArea className={classes.keyboard}>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title="Teacher"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Add Cart
                </Button>
                <Button size="small" color="primary">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      }
    </Grid>
  );
}

export default Electronic;
