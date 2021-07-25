import { Grid, Typography, makeStyles, Theme } from '@material-ui/core';
import { Hours } from '../models/hours';

type Props = {
  hours: Hours[]
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "5px",
    width: "100%"
  },
  heading: {
    fontSize: "20px"
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
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <Grid className={classes.root}>
      <Typography className={classes.heading}>Hours:</Typography>
      {props.hours.length
        ?
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
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
            {days.map(day => (
              <Typography>{day}:</Typography>
            ))}
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            className={classes.right}
          >
            {props.hours.map(day => (
              <Typography key={day.day} noWrap>
                {day.start} to {day.end}
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