import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import LocationDetails from "../../components/Location-Details";

import useStyles from "../../assests/style/sideBar";

const SideBar = () => {
  const classes = useStyles();
  const [type, setType] = React.useState("restaurants");
  const [rating, setRating] = React.useState("");

  const places = [
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
  ];
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotel & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(event) => setType(event.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((data, index) => (
          <Grid item key={index} xs={12}>
            <LocationDetails place={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SideBar;
