import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import CountryCard from "./components/CountryCard";
import { day_nightState } from "./features/day_night_Slice";
import "./assets/reduxDetails.css";

function Home({ countries }) {
  // countries state
  const [countriesState, setCountriesState] = useState("");

  // select state
  const [selected, setSelected] = useState("");

  // search state
  const [input, setInput] = useState("");

  // set state equal to countries prop if not filtered by region
  useEffect(() => {
    const label = document.getElementById("demo-simple-select-label");
    if (selected) {
      label.style.display = "none";
      const newCountries = countries.filter((country) => {
        return country.region.includes(selected);
      });
      setCountriesState(newCountries);
    } else {
      setCountriesState(countries);
      label.style.display = "block";
    }
  }, [countries, selected]);

  // handel user input search
  const handelSearch = (e) => {
    setInput(e.target.value);
    const newCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(input);
    });
    setCountriesState(newCountries);
    setSelected("");
  };

  // redux state to night mode
  const day_nightSelector = useSelector(day_nightState);

  // Select handeling
  const handelSelect = (e) => {
    const selection = e.target.value;
    setSelected(selection);
  };

  // main color variable
  const mainColor = `${day_nightSelector ? "hsl(207, 26%, 17%)" : "white"}`;
  const mainBackGroundColor = `${
    day_nightSelector ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"
  }`;
  const elementBackGround = `${
    day_nightSelector ? "white" : "hsl(209, 23%, 22%)"
  }`;

  return (
    <main>
      <Container
        maxWidth={"100%"}
        style={{
          display: "flex",
          paddingTop: "50px",
          paddingLeft: "80px",
          paddingRight: "80px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: `${mainBackGroundColor}`,
        }}
      >
        {/* search input */}
        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          sx={{
            backgroundColor: `${mainBackGroundColor}`,
          }}
        >
          {/* search */}
          <Grid
            sx={{
              backgroundColor: `${mainBackGroundColor}`,
            }}
          >
            {/* search input */}
            <Input
              // icon
              startAdornment={
                <InputAdornment position="start">
                  <AiOutlineSearch
                    style={{
                      fontSize: "1.3rem",
                      color: "hsl(0, 0%, 52%)",
                    }}
                  />
                </InputAdornment>
              }
              className="serachInput"
              name="search"
              id="search"
              placeholder="Search for country..."
              inputProps={{
                background: `${ elementBackGround }`,
                color: `${mainColor }`,
              }}
              sx={{
                "& input::placeholder": {
                  padding: "10px",
                  color: "hsl(0, 0%, 52%)",
                },
                background: `${ elementBackGround }`,
                paddingLeft: "1.5em",
                border: "none",
                width: "35vw",
                height: "50px",
                color: `${mainColor }`,
              }}
              onChange={(e) => {
                handelSearch(e);
              }}
            />
          </Grid>
          {/* select */}
          <Grid
            style={{
              width: "200px",
              height: "50px",
              background: `${mainBackGroundColor}`,
            }}
          >
            <FormControl
              style={{
                width: "100%",
                height: "100%",
                color: `${mainColor }`,
              }}
            >
              <InputLabel
                key={"label"}
                id="demo-simple-select-label"
                style={{
                  width: "100%",
                  color: "hsl(0, 0%, 52%)",
                  border: "none",
                }}
                variant="filled"
              >
                Filter by Region
              </InputLabel>
              <Select
                className="selectInput"
                inputProps={{
                  MenuProps: {
                    MenuListProps: {
                      sx: {
                        background: `${ elementBackGround }`,
                        color: `${mainColor }`,
                      },
                    },
                  },
                }}
                id="demo-simple-select-label"
                value={selected}
                onChange={(e) => handelSelect(e)}
                sx={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  background: `${ elementBackGround }`,
                  color: `${mainColor }`,
                }}
              >
                <MenuItem
                  value="Africa"
                  style={{
                    background: `${ elementBackGround }`,
                    color: `${mainColor }`,
                  }}
                >
                  Africa
                </MenuItem>
                <MenuItem
                  value="America"
                  style={{
                    backgroundColor: `${ elementBackGround }`,
                    color: `${mainColor }`,
                  }}
                >
                  America
                </MenuItem>
                <MenuItem
                  value="Asia"
                  style={{
                    backgroundColor: `${ elementBackGround }`,
                    color: `${mainColor }`,
                  }}
                >
                  Asia
                </MenuItem>
                <MenuItem
                  value="Europe"
                  style={{
                    backgroundColor: `${ elementBackGround }`,
                    color: `${mainColor }`,
                  }}
                >
                  Europe
                </MenuItem>
                <MenuItem
                  value="Oceania"
                  style={{
                    backgroundColor: `${ elementBackGround }`,
                    color: `${mainColor }`,
                  }}
                >
                  Oceania
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          display={"flex"}
          gap={"80px"}
          marginTop={"20px"}
          paddingBottom={"20px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingTop={"30px"}
        >
          {countriesState ? (
            countriesState.map((el) => {
              return (
                <CountryCard
                  flagImage={el.flags.svg}
                  cName={el.name}
                  population={el.population}
                  capital={el.capital}
                  region={el.region}
                  key={el.numericCode}
                  nativeName={el.nativeName}
                  subRegion={el.subregion}
                  toplevelDomain={el.topLevelDomain}
                  currency={el.currencies}
                  languages={el.languages}
                  borderCountries={el.borders}
                  alpha3Code={el.alpha3Code}
                />
              );
            })
          ) : (
            <></>
          )}
        </Grid>
      </Container>
    </main>
  );
}

export default Home;
