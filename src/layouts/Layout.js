import React, { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./headers/Header";
import ScrollTop from "./ScrollTop";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212529',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          // "& .MuiOutlinedInput-notchedOutline": {
          //   border: `5px solid green`,
          // },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid #212529`,
            },
          }
        },
        input: {
          fontSize: '14px',
          padding: '10px 15px',
          height: '20px'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          padding: '2px 0px'
        },
        shrink: {
          fontSize: '16px', // Set the font size when the label shrinks
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          fontSize: '14px', // Set your desired font size for the input
          padding: '10px 15px', // Set your desired padding for the input
          height: '40px'
        },
        option: {
          fontSize: '14px', // Set your desired font size for options
        },
      },
    },
  },
});

const Layout = ({ children, header }) => {

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer theme="light" />
      <Fragment>
        <Header header={header} />
        {children}
        <Footer />
        <ScrollTop />
      </Fragment>
    </ThemeProvider>
  );
};
export default Layout;
