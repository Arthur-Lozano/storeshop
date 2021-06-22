import { AppBar, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';


let useStyles = styles => ({
  color: red,
});


// Styles and imports were ommited
function Footer() {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Typography variant='h6' className={classes.footer}>
        © Copyright 2019
      </Typography>
    </AppBar>
  );
}

export default Footer;