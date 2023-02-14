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
import useMediaQuery from "@mui/material/useMediaQuery";

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

  // use mediaquery
  const matches = useMediaQuery("(max-width:376px)");

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
          padding: `${matches ? "20px" : "auto"}`,
          paddingTop: `${matches ? "6vh" : "4vw"}`,
          minHeight: `${matches ? "105vh" : "100vh"}`,
          backgroundColor: `${mainBackGroundColor}`,
          color: `${mainColor}`,
        }}
      >
        {/* top button */}
        <Grid container sx={{ paddingLeft: `${matches ? "auto" : "80px"}` }}>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              boxShadow: `${
                day_nightSelector
                  ? "0px 0px 5px 0px hsl(200deg 15% 51%)"
                  : "rgb(17 21 23) 0px 0px 5px 0px"
              }`,
            }}
          >
            <Button
              startIcon={<BsArrowLeft />}
              style={{
                width: `${matches ? "120px" : "9.722vmax"}`,
                fontSize: `${matches ? ".9rem" : "auto"}`,
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
          gap={`${matches ? "auto" : "9.722vw"}`}
          marginTop={`${matches ? "7.5vh" : "8.61vh"}`}
          height={"100%"}
          width={`${matches ? "100%" : "auto"}`}
          style={{
            color: `${mainColor}`,
            backgroundColor: `${mainBackGroundColor}`,
          }}
          sx={{
            paddingLeft: `${matches ? "auto%" : "80px"}`,
            paddingBottom: `${matches ? "auto" : "80px"}`,
          }}
        >
          <Grid
            sx={{
              width: `${matches ? "100%" : "38%"}`,
              height: `${matches ? "auto" : "60vh"}`,
              maxWidth: "560px",
              maxHeight: `${matches ? "100%" : "400px"}`,
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
            width={`${matches ? "100%" : "50%"}`}
            height={"36vh"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            {/* name */}
            <Grid marginTop={"5vh"}>
              <Typography
                fontWeight={"800"}
                fontSize={`${matches ? "1rem" : "2vw"}`}
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
              marginTop={`${matches ? "2vh" : "4.5vh"}`}
            >
              <Stack gap={"1vh"} width={`${matches ? "100%" : "auto"}`}>
                <Box component={"div"} display={"flex"}>
                  {matches ? (
                    <>
                      <StyledParagraph375 style={{ color: paragraphColor }}>
                        Native Name
                      </StyledParagraph375>
                      <StyledSpan375>
                        {" "}
                        : {selectedCountry?.nativeName}
                      </StyledSpan375>{" "}
                    </>
                  ) : (
                    <>
                      <StyledParagraph style={{ color: paragraphColor }}>
                        Native Name
                      </StyledParagraph>
                      <StyledSpan>: {selectedCountry?.nativeName}</StyledSpan>{" "}
                    </>
                  )}
                </Box>
                <Box component={"div"} display={"flex"}>
                  {matches ? (
                    <>
                      <StyledParagraph375 style={{ color: paragraphColor }}>
                        Population
                      </StyledParagraph375>
                      <StyledSpan375>
                        : {selectedCountry?.population}
                      </StyledSpan375>
                    </>
                  ) : (
                    <>
                      <StyledParagraph style={{ color: paragraphColor }}>
                        Population
                      </StyledParagraph>
                      <StyledSpan>: {selectedCountry?.population}</StyledSpan>
                    </>
                  )}
                </Box>
                <Box component={"div"} display={"flex"}>
                  {matches ? (
                    <>
                      <StyledParagraph375 style={{ color: paragraphColor }}>
                        Region Name
                      </StyledParagraph375>
                      <StyledSpan375>: {selectedCountry?.region}</StyledSpan375>
                    </>
                  ) : (
                    <>
                      <StyledParagraph style={{ color: paragraphColor }}>
                        Region Name{" "}
                      </StyledParagraph>
                      <StyledSpan>: {selectedCountry?.region}</StyledSpan>
                    </>
                  )}
                </Box>
                <Box component={"div"} display={"flex"}>
                  {matches ? (
                    <>
                      <StyledParagraph375 style={{ color: paragraphColor }}>
                        Sub Region Name
                      </StyledParagraph375>
                      <StyledSpan375>
                        : {selectedCountry?.subRegion}
                      </StyledSpan375>
                    </>
                  ) : (
                    <>
                      <StyledParagraph style={{ color: paragraphColor }}>
                        Sub Region Name
                      </StyledParagraph>
                      <StyledSpan>: {selectedCountry?.subRegion}</StyledSpan>
                    </>
                  )}
                </Box>
                <Box component={"div"} display={"flex"}>
                  {matches ? (
                    <>
                      <StyledParagraph375 style={{ color: paragraphColor }}>
                        Capital
                      </StyledParagraph375>
                      <StyledSpan375>
                        : {selectedCountry?.capital}
                      </StyledSpan375>
                    </>
                  ) : (
                    <>
                      <StyledParagraph style={{ color: paragraphColor }}>
                        Capital{" "}
                      </StyledParagraph>
                      <StyledSpan>: {selectedCountry?.capital}</StyledSpan>
                    </>
                  )}
                </Box>
              </Stack>
              <Stack gap={`${matches ? "1vh" : "1.47vh"}`}>
                <Box component={"div"} display={"flex"}>
                  {matches ? (
                    <>
                      <StyledParagraph375 style={{ color: paragraphColor }}>
                        Top Level Development
                      </StyledParagraph375>
                      <StyledSpan375>
                        : {selectedCountry?.toplevelDomain}
                      </StyledSpan375>
                    </>
                  ) : (
                    <>
                      <StyledParagraph style={{ color: paragraphColor }}>
                        Top Level Development
                      </StyledParagraph>
                      <StyledSpan>
                        : {selectedCountry?.toplevelDomain}
                      </StyledSpan>
                    </>
                  )}
                </Box>
                <Box component={"div"} display={"flex"}>
                  {matches ? (
                    <>
                      <StyledParagraph375 style={{ color: paragraphColor }}>
                        Currencies
                      </StyledParagraph375>
                      {selectedCountry?.currency?.map((el) => {
                        return (
                          <StyledSpan375 key={el?.name}>
                            : {el?.name}
                          </StyledSpan375>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <StyledParagraph style={{ color: paragraphColor }}>
                        Currencies{" "}
                      </StyledParagraph>
                      {selectedCountry?.currency?.map((el) => {
                        return (
                          <StyledSpan key={el?.name}>: {el?.name}</StyledSpan>
                        );
                      })}
                    </>
                  )}
                </Box>

                <Box component={"div"} display={"flex"}>
                  {matches ? (
                    <>
                      <StyledParagraph375 style={{ color: paragraphColor }}>
                        Languages
                      </StyledParagraph375>
                      {selectedCountry?.languages?.map((el) => {
                        return (
                          <StyledSpan375 key={el?.name}>
                            : {el?.name}
                          </StyledSpan375>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <StyledParagraph style={{ color: paragraphColor }}>
                        Languages{" "}
                      </StyledParagraph>
                      {selectedCountry?.languages?.map((el) => {
                        return (
                          <StyledSpan key={el?.name}>: {el?.name}</StyledSpan>
                        );
                      })}
                    </>
                  )}
                </Box>
              </Stack>
            </Grid>
            {/* borders */}
            <Grid
              container
              display={"flex"}
              alignItems={"center"}
              marginTop={`${matches ? "2vh" : "5vw"}`}
              height={`${matches ? "100%" : "auto"}`}
            >
              <StyledParagraph
                style={{
                  color: paragraphColor,
                  fontSize: `${matches ? ".7rem" : "auto"}`,
                  fontWeight: `${matches ? "600" : "auto"}`,
                  width: `${matches ? "100%" : "auto"}`,
                  paddingBottom: `${matches ? "1vh" : "auto"}`,
                }}
              >
                Border Countries:
              </StyledParagraph>
              {border?.border != "" ? (
                border?.border?.map((el) => {
                  return (
                    <Typography
                      fontSize={`${matches ? ".7rem" : "1vw"}`}
                      fontWeight={"300"}
                      color={`${paragraphColor}`}
                      backgroundColor={`${
                        day_nightSelector
                          ? "hsl(0, 0%, 100%)"
                          : "hsl(209, 23%, 22%)"
                      }`}
                      marginRight={"5px"}
                      marginLeft={"5px"}
                      marginBottom={"5px"}
                      padding="7px"
                      boxShadow={`${
                        day_nightSelector
                          ? "0px 0px 2px 0px hsl(200deg 15% 51%)"
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
                  color={`${paragraphColor}`}
                  fontSize={`${matches ? ".7rem" : "1vw"}`}
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
                      ? "0px 0px 2px 0px hsl(200deg 15% 51%)"
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

const StyledParagraph375 = styled.p({
  fontWeight: 600,
  fontSize: ".7rem",
});
const StyledSpan = styled.span({
  fontSize: "1vw",
});

const StyledSpan375 = styled.span({
  fontSize: ".7rem",
});
export default Details;
