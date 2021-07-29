import { Grid, makeStyles } from '@material-ui/core';
import Routes from './Routes';

const useStyles = makeStyles(() => ({
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
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Routes/>
    </Grid>
  )
}

export default AppGrid;



