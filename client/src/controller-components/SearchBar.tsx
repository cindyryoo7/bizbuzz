import {  useState } from 'react';
import { AppBar, Toolbar, makeStyles, Theme, alpha, Typography, Grid, Button, TextField, Box, Paper, IconButton, InputBase, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Coordinates } from '../models/coordinates';
import SearchBar from "material-ui-search-bar";
import CloseIcon from '@material-ui/icons/Close';
import { Brightness1 } from '@material-ui/icons';
import { Business } from '../models/business';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "60%",
    flexGrow: 1
  },
  search: {
    border: "none",
    flexGrow: 1,
    width: "50%",
    marginRight: "3px",
    display: 'flex',
    minWidth: "250px",
  },
  currentLoc: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: "center",
    maxWidth: "225px",
    '&:hover': {
      backgroundColor: "#f7f7f9",
    }
  },
  iconButton: {
    padding: 10,
    justifyContent: "center",
    width: "fit-content",
    '&:hover': {
      backgroundColor: 'transparent',
      borderRadius: "0%",
    }
  }
}));

type Props = {
  businesses: Business[],
  setLoading: (loading: boolean) => void,
  setCurrentLocationCoords: (currentLocationCoords: Coordinates) => void,
  setCurrentLocationPhysical: (currentLocationPhysical: string) => void
}

const NavBar = (props: Props) => {
  const [value, setValue] = useState<string>("");

  const classes = useStyles();

  const handleSubmit = () => {
    // props.setLoading(true);
    // handleSearchLocation(`for ${value}`);
    if (props.businesses.length) {
      props.setCurrentLocationCoords(props.businesses[0].coordinates);
      props.setCurrentLocationPhysical(`for ${value}`);
    }
  }

  // const handleSearchLocation = (location: string): void => {
  //   props.setCurrentLocationPhysical(location);
  // }

  const handleLocationPermission = () => {
    // props.setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      let currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      props.setCurrentLocationCoords(currentLocation);
      props.setCurrentLocationPhysical("near you");
    })
  }

  const handleChange = (newValue: string) => {
    setValue(newValue);
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      wrap="nowrap"
      className={classes.root}
    >
      <SearchBar
        value={value}
        placeholder="Search by location..."
        searchIcon={<SearchIcon style={{color: "#303C6C"}}/>}
        onRequestSearch={handleSubmit}
        onChange={(newValue) => {handleChange(newValue)}}
        className={classes.search}
      />
      <Paper className={classes.currentLoc}>
        <IconButton
          color="secondary"
          aria-label="directions"
          className={classes.iconButton}
          onClick={handleLocationPermission}

        >
          <LocationOnOutlinedIcon/>
          <Typography noWrap>Use my current location</Typography>
        </IconButton>
      </Paper>
    </Grid>
  );
}

export default NavBar;