import React from 'react';
import logo from './logo.svg';
import './styles/style.css';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from './pages/home';
import { Provider } from 'react-redux';
import { store } from './redux';


export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider
      theme={theme}
    >

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>


    
    </ThemeProvider>
    </Provider>
  );
}

export default App;
