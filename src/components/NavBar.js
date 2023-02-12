import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { day_nightState, setReduxDayNight } from "../features/day_night_Slice";

function NavBar() {
  const dispatch = useDispatch();
  const day_nightSelector = useSelector(day_nightState);

  const day_nightReduxSwitcher = useCallback(() => {
    if (day_nightSelector) {
      return { ReduxDay_night: false };
    } else {
      return { ReduxDay_night: true };
    }
  }, [day_nightSelector]);

  const day_night_switch = () => {
    dispatch(setReduxDayNight(day_nightReduxSwitcher()));
  };
  console.log(day_nightSelector.ReduxDay_night);

  return (
    <Box
      component={"div"}
      sx={{
        backgroundColor: `${
          day_nightSelector ? "white" : "hsl(209, 23%, 22%)"
        }`,
        color: `${day_nightSelector ? "hsl(209, 23%, 22%)" : "white"}`,
        width: "100%",
        maxWidth: "100%",
        height: "80px",
        display: "flex",
      }}
      xs={{
        maxWidth: "1441px",
      }}
    >
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
        padding={"0 80px"}
      >
        <Grid>
          <Typography
            component={"h1"}
            fontWeight={"800"}
            sx={{
              color: `${day_nightSelector ? "hsl(209, 23%, 22%)" : "white"}`,
            }}
          >
            Where in the world ?
          </Typography>
        </Grid>
        <Grid>
          <Button
            onClick={() => {
              day_night_switch();
            }}
            sx={{
              color: `${day_nightSelector ? "hsl(209, 23%, 22%)" : "white"}`,
              backgroundColor: `${
                day_nightSelector ? "white" : "hsl(209, 23%, 22%)"
              }`,
              fontWeight: "600",
            }}
          >
            Dark Mode
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NavBar;
