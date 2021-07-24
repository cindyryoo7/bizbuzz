import {  useState } from 'react';
import { AppBar, Toolbar, makeStyles, Theme, alpha, Typography, Grid, Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Coordinates } from '../models/coordinates';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "50%",
  },
  searchbar: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '50%',
  },
  icon: {
    // padding: theme.spacing(0, 2),
    // height: '100%',
    // position: 'absolute',
    // pointerEvents: 'none',
    // display: 'flex',
    border: "none",
    background: "transparent"
  },
  text: {
    color: 'inherit',
    width: "100%",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
  },
  location: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: "blue"
  }
}));

type Props = {
  setLocation: (location: Coordinates | string) => void,
  setLoading: (loading: boolean) => void,
  setCurrentLocation: (currentLocation: string) => void
}

const SearchBar = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>("");

  const handleSubmit = () => {
    props.setLoading(true);
    handleSearchLocation(`for ${value}`);
    props.setCurrentLocation(value);
  }

  const handleSearchLocation = (location: string): void => {
    props.setLocation(location);
  }

  const handleLocationPermission = () => {
    props.setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      let currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      props.setLocation(currentLocation);
      props.setCurrentLocation("near you");
    })
  }

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

//   <input
//   type="text"
//   placeholder="Search by location..."
//   onChange={(e) => {handleChange(e)}}
// />

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Grid
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.searchbar}
          >
            <form onSubmit={handleSubmit}>
              <Button className={classes.icon}>
                <SearchIcon />
              </Button>
              <TextField
                label="Search by location..."
                onChange={(e) => {handleChange(e)}}
              />
            </form>
          </Grid>
          <Grid onClick={handleLocationPermission}>
            <div className={classes.icon}>
              <LocationOnOutlinedIcon />
            </div>
            <Typography className={classes.location}>
              Use my current location
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );

}

export default SearchBar;