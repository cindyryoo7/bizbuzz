import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core';
import AppGrid from './view-components/AppGrid';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fbe8a6'
    },
    secondary: {
      main: '#303C6C'
    }
  }
})

const App = () =>
  <ThemeProvider theme={theme}>
    <AppGrid />
  </ThemeProvider>

export default App;

