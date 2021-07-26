import { makeStyles, Theme, Grid, Typography } from '@material-ui/core';
import Image from "../assets/honey.png";

type Props = {
  rating: number,
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: 1,
    width: "100%",
  },
  fill: {
    display: "inline-block",
    height: "20px",
    backgroundColor: "#FCCD04",
    alignItems: "center",
    width: "20px",
    // margin: "2px"
  },
  outline: {
    height: "20px",
    width: "20px",
    position: "relative",
    bottom: "0px",
  },
  left: {
    width: "100%",
    // paddingRight: "10px"
  },
  container: {
    height: "20px",
    width: "20px",
    display: "inline-block"
  }
  // right: {
  //   width: "75%",
  //   paddingRight: "5px"
  // }
}))

const RatingsReviews = ({rating}: Props) => {
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
    // <Grid
    //   container
    //   direction="row"
    //   justifyContent="center"
    //   alignItems="center"
    //   wrap="nowrap"
    //   className={classes.root}
    // >
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        wrap="nowrap"
        className={classes.left}
      >
        <Typography align="right">{overallRating}/5</Typography>
        &nbsp;
        {numberOfIcons.map((item, index) => (
          <div className={classes.container}>
            <div key={index} style={{ 'width': `${Number(item * 20)}px` }} className={classes.fill}>
              <img src={Image} alt="star" className={classes.outline}/>
            </div>
          </div>

        ))}
      </Grid>
    // </Grid>
  );
};

export default RatingsReviews;

// import { makeStyles, Theme, Grid, Typography } from '@material-ui/core';
// import Image from "../assets/honey.png";

// type Props = {
//   rating: number,
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flex: 1,
//     width: "100%",
//   },
//   container: {
//     display: "inline-block",
//   },
//   fill: {
//     display: "inline-block",
//     height: "20px",
//     backgroundColor: "#FCCD04",
//     alignItems: "center",
//     width: "20px",
//     margin: "2px"
//   },
//   outline: {
//     height: "20px",
//     width: "20px",
//     position: "relative",
//     bottom: "0px",
//   },
//   left: {
//     width: "200%",
//     paddingRight: "10px"
//   },
//   right: {
//     width: "75%",
//     paddingRight: "5px"
//   }
// }))

// const RatingsReviews = ({rating}: Props) => {
//   const classes = useStyles();

//   let numberOfIcons = [];
//   let overallRating = rating;

//   while (numberOfIcons.length < 5) {
//     if (rating >= 1) {
//       numberOfIcons.push(1);
//     } else if (rating > 0) {
//       let empty = Math.abs(0 - rating);
//       let quarter = Math.abs(0.25 - rating);
//       let half = Math.abs(0.5 - rating);
//       let threeQuarters = Math.abs(0.75 - rating);
//       let smallestNum = Math.min(empty, quarter, half, threeQuarters);
//       switch (smallestNum) {
//         case (empty):
//           numberOfIcons.push(0);
//           break;
//         case quarter:
//           numberOfIcons.push(0.25);
//           break;
//         case half:
//           numberOfIcons.push(0.5);
//           break;
//         case threeQuarters:
//           numberOfIcons.push(0.75);
//           break;
//         default:
//           numberOfIcons.push(0);
//           break;
//         }
//     } else {
//       numberOfIcons.push(0);
//     }
//     rating = rating - 1;
//   }

//   return (
//     <Grid
//       container
//       direction="row"
//       justifyContent="center"
//       alignItems="center"
//       wrap="nowrap"
//       className={classes.root}
//     >
//       <Grid
//         container
//         direction="row"
//         justifyContent="flex-end"
//         alignItems="center"
//         wrap="nowrap"
//         className={classes.left}
//       >
//         <Typography align="right">{overallRating}/5</Typography>
//         &nbsp;
//         {numberOfIcons.map((item, index) => (
//           <div key={index} style={{ 'width': `${Number(item * 20)}px` }} className={classes.fill}>
//             <img src={Image} alt="star" className={classes.outline}/>
//           </div>
//         ))}
//       </Grid>
//     </Grid>
//   );
// };

// export default RatingsReviews;