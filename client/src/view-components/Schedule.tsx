import { useState, useEffect } from 'react';
import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Hours } from '../models/hours';
import moment from 'moment';

type Props = {
  hours: Hours[]
}

const useStyles = makeStyles(() => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  left: {
    width: "20%"
  },
  right: {
    width: "50%"
  }
}))

const Schedule = (props: Props) => {
  const classes = useStyles();
  const [formattedHours, setFormattedHours] = useState<string[]>([]);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const mapHours = (hours: Hours[]) => {
    let currentDay = -1;
    let currentDayText = "";
    let week = [];
    for (let i = 0; i < hours.length; i++) {
      if (hours[i].day === currentDay) {
        currentDayText = currentDayText.concat(`, ${moment(hours[i].start, "HH:mm").format("LT")} to ${moment(hours[i].end, "HH:mm").format("LT")}`)
        currentDay = hours[i].day  as number;
      } else {
        if (currentDayText.length) {
          week.push(currentDayText)
        }
        currentDayText = `${moment(hours[i].start, "HH:mm").format("LT")} to ${moment(hours[i].end, "HH:mm").format("LT")}`;
        currentDay++;
      }
    }
    week.push(currentDayText);
    if (week.length < 7) {
      for (let i = week.length; i < 7; i++) {
        week.push("Not Available")
      }
    }
    return week;
  }

  useEffect(() => {
    if (props.hours.length) {
      setFormattedHours(mapHours(props.hours))
    }
  }, [props.hours])

  return (
    <Grid className={classes.root}>
      <Typography className={classes.heading}>Hours:</Typography>
      {props.hours.length
        ?
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          wrap="nowrap"
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            className={classes.left}
          >
            {days.map((day, index) => (
              <Typography key={day+index}>{day}:</Typography>
            ))}
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            className={classes.right}
          >
            {formattedHours.map((day, index) => (
              <Typography key={day + index} noWrap>
                {day}
              </Typography>
            ))}
          </Grid>
        </Grid>
        : <Typography>No hours available.</Typography>
      }
    </Grid>
  );
}

export default Schedule;