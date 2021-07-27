import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import HoneyComb from "../assets/honeycomb-transparent.jpeg";
import Bee from "../assets/bee.jpeg";

const useStyles = makeStyles((/* theme */) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    padding: "15px",
  },
  container: {
    border: "1px solid #303C6C"
  },
  heading: {
    fontSize: "40px",
    fontWeight: "bold",
    margin: "0px"
  },
  subheading: {
    fontSize: "15px",
    marginTop: "0px",
    marginBottom: "10px"
  },
  text: {
    width: "20%"
  },
  image: {
    width: "50px",
    height: "50px"
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
      direction="row"
      alignItems="center"
      justifyContent="center"
      wrap="nowrap"
      className={classes.root}
    >
      <img src={HoneyComb} alt="honeycomb" className={classes.image}/>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.text}
      >
        <Typography className={classes.heading}>
          BizBuzz
        </Typography>
        <Typography className={classes.subheading}>
          Find the <em>buzz</em> about your local <em>biz</em>.
        </Typography>
      </Grid>
      <img src={Bee} alt="bee" className={classes.image}/>
    </Grid>
  )
}

export default Header;

// return(
  // <Grid
  //   container
  //   direction="column"
  //   alignItems="center"
  //   justifyContent="center"
  //   className={classes.root}
  // >
  //   <Typography className={classes.heading}>
  //     BizBuzz
  //   </Typography>
  //   <Typography className={classes.subheading}>
  //     Find the <em>buzz</em> about your local <em>biz</em>.
  //   </Typography>
  // </Grid>



