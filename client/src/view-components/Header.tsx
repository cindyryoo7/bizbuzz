import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((/* theme */) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  heading: {
    fontSize: "40px",
    color: "#303C6C",
    fontWeight: "bold",
    margin: "0px"
  },
  subheading: {
    fontSize: "20px",
    marginTop: "0px",
    marginBottom: "10px"
  }
}));

type Props = {
  setLoading: (loading: boolean) => void
}

const Header = (props: Props) => {
  const classes = useStyles();

  return(
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.root}
    >
      <h1 className={classes.heading}>BizBuzz</h1>
      <h4 className={classes.subheading}>Find the <em>buzz</em> about your local <em>biz</em>.</h4>

    </Grid>
  )
}

export default Header;



