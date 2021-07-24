import {  useState } from 'react';
import { AppBar, Toolbar, makeStyles, Theme, alpha, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    height: "50%"
  },
  appBar: {
    width: "100%"
  },
  toolbar: {
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
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  setLocation: (location: number[] | string) => void,
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
      let currentLocation = [position.coords.latitude, position.coords.longitude]
      props.setLocation(currentLocation);
      props.setCurrentLocation("near you");
    })
  }

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.toolbar}>
            <form onSubmit={() => {handleSubmit()}}>
              <label>
                <input type="text" placeholder="Search by location..." onChange={(e) => {handleChange(e)}}></input>
              </label>
              <button className={classes.icon}>
                <SearchIcon />
              </button>
            </form>
          </div>
          <div
            className={classes.toolbar}
            onClick={handleLocationPermission}
          >
            <div className={classes.icon}>
              <LocationOnOutlinedIcon />
            </div>
            <Typography
              className={classes.location}
            >
                Use my current location
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );

}

export default SearchBar;