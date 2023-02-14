import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { day_nightState, setReduxDayNight } from "../features/day_night_Slice";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import useMediaQuery from "@mui/material/useMediaQuery";

function NavBar() {
  // dispatch
  const dispatch = useDispatch();
  // redux day-night selector
  const day_nightSelector = useSelector(day_nightState);

  // switch between dark and light based on redux select
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

  // colors variables
  const mainBack = `${
    day_nightSelector ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)"
  }
  `;
  const mainColor = `
  ${day_nightSelector ? "hsl(209, 23%, 22%)" : "white"}
 `;
  const matches = useMediaQuery("(max-width:450px)");

  return (
    <nav>
      <Box
        component={"div"}
        sx={{
          backgroundColor: `${mainBack}`,
          color: `${mainColor}`,
          width: "100%",
          maxWidth: "100%",
          height: `${matches ? "7vh" : "6vw"}`,
          display: "flex",
        }}
      >
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
          padding={`${matches ? "0  20px" : "0 80px"}`}
          boxShadow={
            day_nightSelector
              ? "0px 0px 7px 1px hsl(209deg 23% 92%)"
              : "0px 0px 1px 2px hsl(209deg 23% 23%)"
          }
        >
          <Grid>
            <Typography
              component={"h1"}
              fontWeight={"800"}
              fontSize={`${matches ? ".9rem" : "1.3vw"}`}
              sx={{
                color: `${mainColor}`,
              }}
            >
              Where in the world ?
            </Typography>
          </Grid>
          <Grid>
            <Button
              startIcon={
                day_nightSelector ? (
                  <BsMoon
                    style={{
                      fontSize: `${matches ? ".7rem" : "1.3vw"}`,
                    }}
                  />
                ) : (
                  <BsMoonFill
                    style={{
                      fontSize: `${matches ? ".7rem" : "1.3vw"}`,
                    }}
                  />
                )
              }
              onClick={() => {
                day_night_switch();
              }}
              sx={{
                color: `${mainColor}`,
                backgroundColor: `${mainBack}`,
                fontWeight: "300",
                fontSize: `${matches ? ".7rem" : "1.3vw"}`,
              }}
            >
              Dark Mode
            </Button>
          </Grid>
        </Grid>
      </Box>
    </nav>
  );
}

export default NavBar;
