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
import CountryCard from "./components/CountryCard";
import { useSelector } from "react-redux";
import { day_nightState } from "./features/day_night_Slice";
import { useEffect, useState } from "react";
import "./assets/reduxDetails.css";
import { AiOutlineSearch } from "react-icons/ai";

function Home({ countries }) {
  console.log(countries);
  // countries state
  const [countriesState, setCountriesState] = useState("");
  const [selected, setSelected] = useState("");

  // search state
  const [input, setInput] = useState("");

  // set state equal to countries prop
  useEffect(() => {
    if (selected) {
      const newCountries = countries.filter((country) => {
        return country.region.includes(selected);
      });
      setCountriesState(newCountries);
    } else {
      setCountriesState(countries);
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

  return (
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
        backgroundColor: `${
          day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
        }`,
      }}
    >
      {/* search input */}
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        sx={{
          backgroundColor: `${
            day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
          }`,
        }}
      >
        <Grid
          sx={{
            backgroundColor: `${
              day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
            }`,
          }}
        >
          <Input
            startAdornment={
              <InputAdornment position="start">
                <AiOutlineSearch
                  style={{
                    color: `${
                      day_nightSelector ? "hsl(207, 26%, 17%)" : "white"
                    }`,
                    fontSize: "1.4rem",
                  }}
                />
              </InputAdornment>
            }
            name="search"
            id="search"
            placeholder="Search for country "
            inputProps={{
              backgroundColor: `${
                day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
              }`,
              color: `${day_nightSelector ? "hsl(207, 26%, 17%)" : "white"}`,
            }}
            sx={{
              "& input::placeholder": {
                padding: "10px",
                color: "white",
              },
              paddingLeft: "1.5em",
              border: "1px solid black",
              width: "480px",
              height: "50px",
              color: `${day_nightSelector ? "hsl(207, 26%, 17%)" : "white"}`,
            }}
            onChange={(e) => {
              handelSearch(e);
            }}
          />
        </Grid>
        <Grid
          style={{
            width: "200px",
            height: "50px",
            backgroundColor: `${
              day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
            }`,
          }}
        >
          <FormControl
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: `${
                day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
              }`,
              color: `${day_nightSelector ? "hsl(207, 26%, 17%)" : "white"}`,
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: `${
                  day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
                }`,
                color: `${day_nightSelector ? "hsl(207, 26%, 17%)" : "white"}`,
              }}
            >
              Filter by Region
            </InputLabel>
            <Select
              inputProps={{
                MenuProps: {
                  MenuListProps: {
                    sx: {
                      backgroundColor: `${
                        day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
                      }`,
                    },
                  },
                },
              }}
              id="demo-simple-select-label"
              value={selected}
              label="Age"
              onChange={(e) => handelSelect(e)}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: `${
                  day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
                }`,
                color: `${day_nightSelector ? "hsl(207, 26%, 17%)" : "white"}`,
              }}
            >
              {/* <option
                value="Filter by Region"
                style={{
                  backgroundColor: `${
                    day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
                  }`,
                  color: `${
                    day_nightSelector ? "hsl(207, 26%, 17%)" : "white"
                  }`,
                }}
              >
                Filter by Region{" "}
              </option> */}
              <MenuItem
                value="Africa"
                style={{
                  backgroundColor: `${
                    day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
                  }`,
                  color: `${
                    day_nightSelector ? "hsl(207, 26%, 17%)" : "white"
                  }`,
                }}
              >
                Africa
              </MenuItem>
              <MenuItem
                value="America"
                style={{
                  backgroundColor: `${
                    day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
                  }`,
                  color: `${
                    day_nightSelector ? "hsl(207, 26%, 17%)" : "white"
                  }`,
                }}
              >
                America
              </MenuItem>
              <MenuItem
                value="Asia"
                style={{
                  backgroundColor: `${
                    day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
                  }`,
                  color: `${
                    day_nightSelector ? "hsl(207, 26%, 17%)" : "white"
                  }`,
                }}
              >
                Asia
              </MenuItem>
              <MenuItem
                value="Europe"
                style={{
                  backgroundColor: `${
                    day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
                  }`,
                  color: `${
                    day_nightSelector ? "hsl(207, 26%, 17%)" : "white"
                  }`,
                }}
              >
                Europe
              </MenuItem>
              <MenuItem
                value="Oceania"
                style={{
                  backgroundColor: `${
                    day_nightSelector ? "white" : "hsl(207, 26%, 17%)"
                  }`,
                  color: `${
                    day_nightSelector ? "hsl(207, 26%, 17%)" : "white"
                  }`,
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
        // columnGap={"80px"}
        // rowGap={"70px"}
        gap={"80px"}
        marginTop={"20px"}
        paddingBottom={"20px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingTop={"30px"}
        width={"100%"}
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
  );
}

export default Home;
