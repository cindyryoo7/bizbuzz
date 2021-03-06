import {
  Chip,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Category } from '../models/category';

const useStyles = makeStyles(() => ({
  container: {
    padding: "5px"
  },
  text: {
    paddingRight: "5px"
  },
  chip: {
    marginRight: "2px"
  }
}))

type Props = {
  categories: Category[]
}

const Categories = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      className={classes.container}
    >
      <Typography className={classes.text}>Categories:</Typography>
      {props.categories.map((category, index) => (
        <Chip
          key={index}
          label={category.title}
          className={classes.chip}
        />
      ))}
    </Grid>
  )
}

export default Categories;