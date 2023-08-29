import React from 'react'
import hero from "../assets/img/hero.png"
import { Container, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import classNames from 'classnames';
import 'animate.css';
const Hero = () => {
  const theme = createTheme();
  const theme2 = createTheme();
theme.typography.h3= {
  
  '@media (min-width:200px)': {
    fontSize: '28px',
    text:'center',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
};

theme2.typography.h5= {
  
  '@media (min-width:200px)': {
    fontSize: '18px',
  },
  [theme2.breakpoints.up('md')]: {
    fontSize: '24px',
  },
};

  return (
    <div
      style={{ backgroundImage: `url(${hero})` }}
      className="center d-flex align-items-center bg-no-repeat bg-bottom bg-cover w-full h-[80vh] bg-gradient-to-r  from-[#0B8692] to-[#223C5E] to-[#350033] to-transparent"
    >
      <Container className="pt-20 mt-auto">
        <div component="row" className={classNames('animate__animated', 'animate__fadeInUp')}  >
          <div
            component="col"
            className="col-lg-6  flex-wrap ml-16 mt-5 box-border "
          >
            <ThemeProvider theme={theme}>
              <Typography
                variant="h3"
                className="text-[#0c8390]   font-bold leading-[3rem] max-w-lg"
              >
                <strong>DİJİTAL DÖNÜŞÜMDE ÖNCÜ</strong>
              </Typography>
            </ThemeProvider>

            <ThemeProvider theme={theme2}>
              {" "}
              <Typography
                variant="h5"
                className="text-[#495e61] mb-60   font-medium mt-2 max-w-lg"
              >
                Elektronik uygulamalarımız,kullandığımız teknolojiler ve iş
                ilanlarımız birarada...
              </Typography>{" "}
            </ThemeProvider>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero