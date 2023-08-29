import React from 'react'
import cta from "../assets/img/cta.jpg"
import {Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import classNames from 'classnames';
import 'animate.css';
const Cta = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url(${cta}) fixed center center`,
        backgroundSize: "cover",
      }}
      className="bg-gradient-to-r  from-[#0B8692] to-[#223C5E] to-[#350033]  bg-fixed bg-center bg-cover px-12 text-center p-24 text-white"
    >
      <Container className={classNames('animate__animated', 'animate__zoomIn')}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 8, md: 12 }}
          >
            <Grid xs={12} sm={12} md={9}>
              <Typography variant="h5">
                {" "}
                <strong>GİBUX Nedir?</strong>
              </Typography>
              <Typography className="pt-3">
                Açık kaynak kod tabanlı işletim sistemi GİBUX, Gelir İdaresi
                Başkanlığının yurt genelindeki tüm Vergi Daireleri ve Mal
                Müdürlüklerinde kullanılması amacıyla Türk mühendisleri
                tarafından analiz ve tasarımı yapılarak Gelir İdaresi
                Başkanlığının ihtiyaçlarına uygun olarak geliştirilmiştir.
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={3}>
              <button className=" mt-12 py-2 px-10 border-solid border-2 border-[#ffffff] text-sm font-semibold text-white rounded-3xl hover:text-white hover:bg-[#47b2e4] hover:underline hover:border-[#47b2e4] ">
              <a href="https://gibux.gib.gov.tr/" >Detaylı Bilgi</a>
              </button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Cta;