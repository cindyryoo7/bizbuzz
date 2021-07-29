import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Bee from '../assets/bee.jpeg';
import HoneyComb from '../assets/honeycomb-transparent.jpeg';

const useStyles = makeStyles(() => ({
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

const Header = () => {
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
      <img src={HoneyComb} alt="honeycomb icon used for app logo" className={classes.image}/>
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
      <img src={Bee} alt="bee icon used for app logo" className={classes.image}/>
    </Grid>
  )
}

export default Header;