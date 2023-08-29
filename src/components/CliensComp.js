import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const CliensComp = () => {
    const theme = createTheme();
    const theme2 = createTheme();
  theme.typography.h4= {
    
    '@media (min-width:200px)': {
      fontSize: '18px',
      text:'center',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '26px',
    },
  };
  theme2.typography.h5= {
    
    '@media (min-width:200px)': {
      fontSize: '12px',
    },
    [theme2.breakpoints.up('md')]: {
      fontSize: '18px',
    },
  };
  return (
    <div className=" text-center bg-[#f3f5fa] p-8">
      <Container>
        <Box>
          <Grid container spacing={1}>
            <Grid xs={12} md={4} sm={12}>
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h4"
                  className="text-[#0c8390]  font-medium  leading-[3rem] max-w-lg font-sans"
                >
                  Çalışma Şekli
                </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme2}>
                {" "}
                <Typography
                  variant="h5"
                  className=" text-[#444444]   font-medium  max-w-lg  "
                >
                  Tam Zamanlı
                </Typography>{" "}
              </ThemeProvider>
            </Grid>
            <Grid xs={12} md={4} sm={12}>
            <ThemeProvider theme={theme}>
                <Typography
                  variant="h4"
                  className="text-[#0c8390]  font-medium  leading-[3rem] max-w-lg font-sans"
                >
                  Pozisyon Seviyesi
                </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme2}>
                {" "}
                <Typography
                  variant="h5"
                  className=" text-[#444444]   font-medium  max-w-lg  "
                >
                  Tam Zamanlı
                </Typography>{" "}
              </ThemeProvider>
            </Grid>
            <Grid xs={12} md={4} sm={12}>
            <ThemeProvider theme={theme}>
                <Typography
                  variant="h4"
                  className="text-[#0c8390]  font-medium  leading-[3rem] max-w-lg font-sans"
                >
                  Konum
                </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme2}>
                {" "}
                <Typography
                  variant="h5"
                  className=" text-[#444444]   font-medium  max-w-lg  "
                >
                  Tam Zamanlı
                </Typography>{" "}
              </ThemeProvider>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default CliensComp