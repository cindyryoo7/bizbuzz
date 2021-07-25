import { makeStyles, Theme, Grid, Typography } from '@material-ui/core';
import Image from "../assets/honey.png";

type Props = {
  rating: number,
  reviewCount: number
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: 1,
    width: "100%"
  },
  container: {
    display: "inline-block",
  },
  fill: {
    display: "inline-block",
    height: "20px",
    backgroundColor: "#FCCD04",
    alignItems: "center",
    width: "27px",
    margin: "2px"
  },
  outline: {
    height: "20px",
    width: "20px",
    position: "relative",
    bottom: "0px",
  },
  reviews: {
    width: "30%",
    align: "right",
  }
}))

const RatingsReviews = ({rating, reviewCount}: Props) => {
  const classes = useStyles();

  let numberOfIcons = [];
  let overallRating = rating;

  while (numberOfIcons.length < 5) {
    if (rating >= 1) {
      numberOfIcons.push(1);
    } else if (rating > 0) {
      let empty = Math.abs(0 - rating);
      let quarter = Math.abs(0.25 - rating);
      let half = Math.abs(0.5 - rating);
      let threeQuarters = Math.abs(0.75 - rating);
      let smallestNum = Math.min(empty, quarter, half, threeQuarters);
      switch (smallestNum) {
        case (empty):
          numberOfIcons.push(0);
          break;
        case quarter:
          numberOfIcons.push(0.25);
          break;
        case half:
          numberOfIcons.push(0.5);
          break;
        case threeQuarters:
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        wrap="nowrap"
        className={classes.root}
      >
        <Typography>{overallRating}/5</Typography>
        &nbsp;
        {numberOfIcons.map((item, index) => (
          <div key={index} style={{ 'width': `${Number(item * 17)}px` }} className={classes.fill}>
            <img src={Image} alt="star" className={classes.outline}/>
          </div>
        ))}
      </Grid>
      <Typography
        noWrap
        className={classes.reviews}
      >
        ({reviewCount})
      </Typography>
    </Grid>
  );
};

export default RatingsReviews;