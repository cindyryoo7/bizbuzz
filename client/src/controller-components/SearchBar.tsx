import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, InputBase, makeStyles, Theme, alpha, Typography } from '@material-ui/core';
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
  },
  inputRoot: {
    color: 'inherit',
    width: "100%"
  },
  text: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
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
  setLocation: (location: number[]) => void,
  setLoading: (loading: boolean) => void
}

const SearchBar = (props: Props) => {
  const classes = useStyles();

  const handlePermission = () => {
    props.setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      let currentLocation = [position.coords.latitude, position.coords.longitude]
      props.setLocation(currentLocation);
    })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.toolbar}>
            <div className={classes.icon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search based on your location..."
              classes={{
                root: classes.inputRoot,
                input: classes.text
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div
            className={classes.toolbar}
            onClick={handlePermission}
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