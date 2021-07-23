import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Routes from '../controller-components/Routes';

const useStyles = makeStyles((/* theme */) => ({
  root: {
    flexGrow: 1,
    fontSize: "20px",
    color: "#303C6C",
    backgroundColor: "#fbe8a6",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
  },
}));

const AppGrid = () => {
  const classes = useStyles();

  return(
    <Grid
      className={classes.root}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Routes />
    </Grid>
  )
}

export default AppGrid;



