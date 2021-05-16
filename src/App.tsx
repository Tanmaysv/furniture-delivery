import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import FurnitureDelivery from "./furniture-delivery";
import store from "./store";
import GlobalStyle from "./themes/global-styles";
import { lightTheme } from "./themes/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <FurnitureDelivery />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
