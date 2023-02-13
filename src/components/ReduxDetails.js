import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { country } from "../features/slice";
import "../assets/reduxDetails.css";
import { borderState, setReduxBorder } from "../features/borderSlice";
import { day_nightState } from "../features/day_night_Slice";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function Details({ countries }) {
  // country state
  const [selectedCountry, setSelectedCountry] = useState({});

  // ###################################### redux ######################################
  // dispatch
  const dispatch = useDispatch();
  // selectors
  const day_nightSelector = useSelector(day_nightState);
  const reduxCountry = useSelector(country);
  const border = useSelector(borderState);

  //   convert alpha3code to border country name to show country name to UI
  const converter = useCallback(() => {
    const newArray = [];
    countries?.forEach((country) => {
      const newBorder = selectedCountry?.borderCountries;
      for (let index = 0; index < newBorder?.length; index++) {
        if (country?.alpha3Code == newBorder[index]) {
          newArray.push(country?.name);
        }
      }
    });
    return newArray;
  }, [selectedCountry?.borderCountries, countries]);

  // use effect to get state from redux && dispatch converter function
  useEffect(() => {
    setSelectedCountry(reduxCountry);
    dispatch(setReduxBorder(converter()));
  }, [reduxCountry, dispatch, converter]);

  // main color variable
  const paragraphColor = `${
    day_nightSelector ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"
  }`;

  const mainColor = `${
    day_nightSelector ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)"
  }`;
  const mainBackGroundColor = `${
    day_nightSelector ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"
  }`;

  return (
    // container
    <section>
      <Box
        component={"div"}
        sx={{
          maxWidth: "100%",
          paddingTop: "4vw",
          height: "100%",
          backgroundColor: `${mainBackGroundColor}`,
          color: `${mainColor}`,
        }}
      >
        {/* top button */}
        <Grid container sx={{ paddingLeft: "80px" }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button
              startIcon={<BsArrowLeft />}
              style={{
                width: "9.722vmax",
                maxWidth: "140px",
                maxHeight: "40px",
                color: `${day_nightSelector ? "hsl(209, 23%, 22%)" : "white"}`,
                backgroundColor: `${
                  day_nightSelector ? "white" : "hsl(209, 23%, 22%)"
                }`,
              }}
            >
              Back
            </Button>
          </Link>
        </Grid>

        {/* bottom section */}
        <Grid // container
          container
          justifyContent={"flex-start"}
          gap={"9.722vw"}
          marginTop={"8.61vh"}
          height={"100%"}
          style={{
            color: `${mainColor}`,
            backgroundColor: `${mainBackGroundColor}`,
          }}
          sx={{ paddingLeft: "80px", paddingBottom: "80px" }}
        >
          <Grid
            sx={{
              width: "38%",
              height: "60vh",
              maxWidth: "560px",
              maxHeight: "400px",
              color: `${mainColor}`,
              backgroundColor: `${mainBackGroundColor}`,
            }}
          >
            {/* left image */}
            <Box
              component={"img"}
              width={"100%"}
              height={"100%"}
              src={selectedCountry?.flag}
              alt={selectedCountry?.name}
            />
          </Grid>
          {/* right section */}
          <Stack
            width={"50%"}
            height={"36vh"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            {/* name */}
            <Grid marginTop={"5.5vh"}>
              <Typography
                fontWeight={"800"}
                fontSize={"2vw"}
                sx={{
                  color: `${mainColor}`,
                }}
              >
                {selectedCountry?.name}
              </Typography>
            </Grid>
            {/* details */}
            <Grid
              container
              justifyContent={"flex-start"}
              gap={"8vw"}
              marginTop={"4.5vh"}
            >
              <Stack gap={"1.47vh"}>
                <Box component={"div"} display={"flex"}>
                  <StyledParagraph style={{ color: paragraphColor }}>
                    Native Name
                  </StyledParagraph>
                  <StyledSpan>: {selectedCountry?.nativeName}</StyledSpan>
                </Box>
                <Box component={"div"} display={"flex"}>
                  <StyledParagraph style={{ color: paragraphColor }}>
                    Population{" "}
                  </StyledParagraph>
                  <StyledSpan>: {selectedCountry?.population}</StyledSpan>
                </Box>
                <Box component={"div"} display={"flex"}>
                  <StyledParagraph style={{ color: paragraphColor }}>
                    Region Name{" "}
                  </StyledParagraph>
                  <StyledSpan>: {selectedCountry?.region}</StyledSpan>
                </Box>
                <Box component={"div"} display={"flex"}>
                  <StyledParagraph style={{ color: paragraphColor }}>
                    Sub Region Name{" "}
                  </StyledParagraph>
                  <StyledSpan>: {selectedCountry?.subRegion}</StyledSpan>
                </Box>
                <Box component={"div"} display={"flex"}>
                  <StyledParagraph style={{ color: paragraphColor }}>
                    Capital{" "}
                  </StyledParagraph>
                  <StyledSpan>: {selectedCountry?.capital}</StyledSpan>
                </Box>
              </Stack>
              <Stack gap={"1.47vh"}>
                <Box component={"div"} display={"flex"}>
                  <StyledParagraph style={{ color: paragraphColor }}>
                    Top Level Development
                  </StyledParagraph>
                  <StyledSpan>: {selectedCountry?.toplevelDomain}</StyledSpan>
                </Box>
                <Box component={"div"} display={"flex"}>
                  <StyledParagraph style={{ color: paragraphColor }}>
                    Currencies{" "}
                  </StyledParagraph>
                  {selectedCountry?.currency?.map((el) => {
                    return <StyledSpan key={el?.name}>: {el?.name}</StyledSpan>;
                  })}
                </Box>
                <Box component={"div"} display={"flex"}>
                  <StyledParagraph style={{ color: paragraphColor }}>
                    Languages{" "}
                  </StyledParagraph>
                  {selectedCountry?.languages?.map((el) => {
                    return <StyledSpan key={el?.name}>: {el?.name}</StyledSpan>;
                  })}
                </Box>
              </Stack>
            </Grid>
            {/* borders */}
            <Grid
              container
              display={"flex"}
              alignItems={"center"}
              marginTop={"2.9vw"}
            >
              <StyledParagraph style={{ color: paragraphColor }}>
                Border:{" "}
              </StyledParagraph>
              {border?.border != "" ? (
                border?.border?.map((el) => {
                  return (
                    <Typography
                      fontSize={"1vw"}
                      fontWeight={"300"}
                      color={`${
                        day_nightSelector
                          ? "hsl(200, 15%, 8%)"
                          : "hsl(0, 0%, 100%)"
                      }`}
                      backgroundColor={`${
                        day_nightSelector
                          ? "hsl(0, 0%, 100%)"
                          : "hsl(209, 23%, 22%)"
                      }`}
                      marginRight={"5px"}
                      marginLeft={"5px"}
                      padding={"5px"}
                      boxShadow={`${
                        day_nightSelector
                          ? "0px 0px 1px 0px hsl(209, 23%, 22%)"
                          : "0px 0px 2px 0px hsl(200, 15%, 8%)"
                      }`}
                      key={el}
                    >
                      {` ${el}`}
                    </Typography>
                  );
                })
              ) : (
                <Typography
                  color={`${
                    day_nightSelector ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"
                  }`}
                  backgroundColor={`${
                    day_nightSelector
                      ? "hsl(0, 0%, 100%)"
                      : "hsl(209, 23%, 22%)"
                  }`}
                  marginRight={"5px"}
                  marginLeft={"5px"}
                  padding={"5px"}
                  boxShadow={`${
                    day_nightSelector
                      ? "0px 0px 1px 0px hsl(209, 23%, 22%)"
                      : "0px 0px 2px 0px hsl(200, 15%, 8%)"
                  }`}
                >
                  Not Available
                </Typography>
              )}
            </Grid>
          </Stack>
        </Grid>
      </Box>
    </section>
  );
}
//   styled components
const StyledParagraph = styled.p({
  fontWeight: 600,
  fontSize: "1vw",
});
const StyledSpan = styled.span({
  fontSize: "1vw",
});

export default Details;
