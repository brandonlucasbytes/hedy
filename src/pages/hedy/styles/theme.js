import { createTheme } from '@mui/material';
import TerminatorTtf from '../../../assets/terminator-real-nfi.ttf';

export const theme = createTheme({
    palette: {
        primary: {
            main: "hsl(147, 71%, 57%)",
        },
        secondary: {
            main: "hsl(191, 96%, 56%)",
        },
    },
    typography: {
        fontFamily: 'Terminator',
        secondary: {
            main: 'Arial'
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'Terminator';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Terminator'), local('Terminator-Regular'), url(${TerminatorTtf}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
    },
})