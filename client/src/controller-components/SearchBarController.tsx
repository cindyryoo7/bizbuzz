import { useState } from 'react';
import {
  IconButton,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { Business } from '../models/business';
import { GoogleCoords } from '../models/googleCoords';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchBar from 'material-ui-search-bar';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
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
  setCenterCoords: (centerCoords: GoogleCoords) => void,
  setCenterPhysical: (centerPhysical: string) => void,
  setUpdateType: (updateType: string) => void
}

const SearchBarController = (props: Props) => {
  const [value, setValue] = useState<string>("");

  const classes = useStyles();

  const handleSubmit = () => {
    if (props.businesses.length) {
      props.setCenterCoords({
        lat: props.businesses[0].coordinates.latitude,
        lng: props.businesses[0].coordinates.longitude
      });
      props.setCenterPhysical(`for ${value}`);
      props.setUpdateType("physical");
    }
  }

  const handleLocationPermission = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      props.setCenterCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      props.setCenterPhysical('near you');
      props.setUpdateType("coordinates");
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

export default SearchBarController;