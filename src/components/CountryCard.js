import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCountry } from "../features/slice";
import { day_nightState } from "../features/day_night_Slice";

function CountryCard({
  flagImage,
  cName,
  population,
  capital,
  region,
  nativeName,
  subRegion,
  toplevelDomain,
  currency,
  languages,
  borderCountries,
}) {
  const navigate = useNavigate();

  const day_nightSelector = useSelector(day_nightState);
  const dispatch = useDispatch();

  const handelClick = () => {
    dispatch(
      setCountry({
        name: cName,
        flag: flagImage,
        nativeName: nativeName,
        population: population,
        region: region,
        subRegion: subRegion,
        capital: capital,
        toplevelDomain: toplevelDomain,
        currency: currency,
        languages: languages,
        borderCountries: borderCountries,
      })
    );
    localStorage.setItem(
      "Country",
      JSON.stringify({
        name: cName,
        flag: flagImage,
        nativeName: nativeName,
        population: population,
        region: region,
        subRegion: subRegion,
        capital: capital,
        toplevelDomain: toplevelDomain,
        currency: currency,
        languages: languages,
        borderCountries: borderCountries,
      })
    );
    navigate("/details");
  };

  return (
    <Grid item={true} md={3} lg={2}>
      <Card
        sx={{
          maxWidth: "260px",
          maxHeight: "330px",
          width: "18.5vw",
          height: "30vw",
          color: `${day_nightSelector ? "hsl(209, 23%, 22%)" : "white"}`,
          backgroundColor: `${
            day_nightSelector ? "white" : "hsl(209, 23%, 22%)"
          }`,
        }}
        onClick={() => {
          handelClick();
        }}
        onMouseOver={(e) => {
          e.target.style.cursor = "pointer";
        }}
      >
        <Grid
          sx={{
            maxHeight: "160px",
            width: "100%",
            height: "47%",
            objectFit: "cover",
          }}
        >
          <CardMedia
            component={"img"}
            sx={{ height: "100%", width: "100%" }}
            image={flagImage}
            title={cName}
          />
        </Grid>
        <CardContent
          sx={{
            color: "white",
            marginTop: "1em",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            fontWeight={"800"}
            fontSize={"1.3rem"}
            color={`${day_nightSelector ? "hsl(209, 23%, 22%)" : "white"}`}
            width={"100%"}
          >
            {cName}
          </Typography>
          <Grid container marginTop={"1em"} alignItems={"center"}>
            <Typography
              variant="body2"
              fontWeight={"600"}
              fontSize={"0.875rem"}
              color={`${day_nightSelector ? "hsl(209, 23%, 22%)" : "white"}`}
            >
              Population
            </Typography>
            <Typography
              component={"p"}
              fontWeight={"300"}
              fontSize={"0.875rem"}
            >
              {`: ${population}`}
            </Typography>
          </Grid>
          <Grid container marginTop={"5px"} alignItems={"center"}>
            <Typography
              variant="body2"
              fontWeight={"600"}
              fontSize={"0.875rem"}
              color={`${day_nightSelector ? "hsl(209, 23%, 22%)" : "white"}`}
            >
              Region
            </Typography>
            <Typography
              component={"p"}
              fontWeight={"300"}
              fontSize={"0.875rem"}
            >
              {`: ${region}`}
            </Typography>
          </Grid>
          <Grid container marginTop={"5px"} alignItems={"center"}>
            <Typography
              variant="body2"
              fontWeight={"600"}
              fontSize={"0.875rem"}
              color={`${day_nightSelector ? "hsl(209, 23%, 22%)" : "white"}`}
            >
              Capital
            </Typography>
            <Typography
              component={"p"}
              fontWeight={"300"}
              fontSize={"0.875rem"}
            >
              {`: ${capital}`}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CountryCard;