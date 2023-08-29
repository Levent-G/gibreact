import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import heroImg from "../assets/img/heroImg.png"
import classNames from 'classnames';
const İlanHeroComp = (props) => {

  const theme = createTheme();
  const theme2 = createTheme();
  theme.typography.h4 = {
    "@media (min-width:200px)": {
      fontSize: "28px",
      text: "center",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "36px",
    },
  };

  theme2.typography.h5 = {
    "@media (min-width:200px)": {
      fontSize: "18px",
    },
    [theme2.breakpoints.up("md")]: {
      fontSize: "22px",
    },
  };
  return (
    <div
      className=" pt-32 p-5"
      style={{
        background:
          "linear-gradient(270deg, #350033 0%, #223C5E 52%, #0B8692 100%) 0% 0%",
      }}
    >
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid xs={12} md={7} sm={12}>
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h4"
                  className="text-white   font-bold leading-[3rem] max-w-lg "
                >
                  <strong>{props.state}</strong>
                </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme2}>
                {" "}
                <Typography
                  variant="h5"
                  className="text-[#ffffff99]    font-medium pt-3 max-w-lg"
                >
                  Başkanlığımızın teknoloji ekiplerinde yer alarak vergi
                  uygulamalarındaki dijital dönüşümün bir parçası olacak çalışma
                  arkadaşları arıyoruz
                </Typography>{" "}
              </ThemeProvider>
              <button className=" mt-12 py-2 px-5 border-solid border-2 border-[#ffffff] bg-white text-sm font-semibold text-[#0c8390] rounded-3xl hover:text-white hover:bg-[#38183f] hover:border-[#38183f] transition delay-100  ease-in-out">
                Başvuru
              </button>
            </Grid>
            <Grid xs={12} md={5} sm={12} >
              <div className={classNames('animate__animated animate__infinite animate__shakeY  animate__slower animate__duration-1s'  )} >
              <img src={heroImg} alt="" className='w-full h-auto pb-5' />
              </div>
            
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default İlanHeroComp