import { createSlice } from "@reduxjs/toolkit";

// my slice
const countrySlice = createSlice({
  name: "auth",
  initialState: {
    name: "",
    nativeName: "",
    population: "",
    region: "",
    subRegion: "",
    capital: "",
    toplevelDomain: "",
    currency: "",
    languages: "",
    borderCountries: "",
    flag: "",
  },
  reducers: {
    setCountry: (state, action) => {
      state.name = action.payload.name;
      state.flag = action.payload.flag;
      state.nativeName = action.payload.nativeName;
      state.population = action.payload.population;
      state.region = action.payload.region;
      state.subRegion = action.payload.subRegion;
      state.capital = action.payload.capital;
      state.toplevelDomain = action.payload.toplevelDomain;
      state.currency = action.payload.currency;
      state.languages = action.payload.languages;
      state.borderCountries = action.payload.borderCountries;
    },
  },
});

export const { setCountry } = countrySlice.actions;
export const country = (state) => state.countrySlice;

export default countrySlice.reducer;
