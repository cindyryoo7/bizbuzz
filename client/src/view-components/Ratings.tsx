import { makeStyles, Theme, Grid } from '@material-ui/core';
import Image from "../assets/honey.png";

type Props = {
  rating: number
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "inline-block",
  },
  fill: {
    display: "inline-block",
    height: "15px",
    backgroundColor: "#FCCD04",
    alignItems: "center"
  },
  outline: {
    height: "19px",
    width: "20px",
    position: "relative",
    bottom: "4px",
  }
}))

const StarRating = ({rating}: Props) => {
  const classes = useStyles();

  let numberOfIcons = [];
  while (numberOfIcons.length < 5) {
    if (rating >= 1) {
      numberOfIcons.push(1);
    } else if (rating > 0) {
      let empty = Math.abs(0 - rating);
      let quarter = Math.abs(0.25 - rating);
      let half = Math.abs(0.5 - rating);
      let threeQuarter = Math.abs(0.75 - rating);
      let closest = Math.min(empty, quarter, half, threeQuarter);
      switch (closest) {
        case (empty):
          numberOfIcons.push(0);
          break;
        case quarter:
          numberOfIcons.push(0.25);
          break;
        case half:
          numberOfIcons.push(0.5);
          break;
        case threeQuarter:
          numberOfIcons.push(0.75);
          break;
        default:
          numberOfIcons.push(0);
          break;
      }
    } else {
      numberOfIcons.push(0);
    }
    rating = rating - 1;
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      wrap="nowrap"
    >
      {numberOfIcons.map((item, index) => {
        return (
          <div key={index} className={classes.container}>
            <div key={index} style={{ 'width': `${Number(item * 17)}px` }} className={classes.fill}>
              <img src={Image} alt="star" className={classes.outline}/>
            </div>
          </div>
        );
      })}
    </Grid>
  );
};

export default StarRating;