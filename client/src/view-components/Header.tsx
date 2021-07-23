import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import SearchBar from '../controller-components/SearchBar';

// const useStyles = makeStyles((/* theme */) => ({
//   root: {
//     fontSize: "20px",
//     color: "#303C6C",
//     fontWeight: "bold",
//   },
// }));

const AppGrid = () => {
  return(
    <Grid
      className="App"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <SearchBar />
    </Grid>
  )
}

export default AppGrid;



