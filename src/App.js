import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material";
import ReduxDetails from "./components/ReduxDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./store";
import { persistor } from "./store";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
    fontWeightRegular: 600,
  },
});

function App() {
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((data) => {
      setcountries(data.data);
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home countries={countries} />} />
              <Route
                path="/details"
                element={<ReduxDetails countries={countries} />}
              />
            </Routes>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
