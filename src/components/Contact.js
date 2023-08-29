import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container,Typography,Divider} from '@mui/material'
import i3 from "../assets/img/istatistikler/i3.png"
import i4 from "../assets/img/istatistikler/i4.png"
import i5 from "../assets/img/istatistikler/i5.png"
import i6 from "../assets/img/istatistikler/i6.png"
import i7 from "../assets/img/istatistikler/i7.png";
import i8 from "../assets/img/istatistikler/i8.png"
import i9 from "../assets/img/istatistikler/i9.png"
import i10 from "../assets/img/istatistikler/i10.png"
import i11 from "../assets/img/istatistikler/i11.png"
import i12 from "../assets/img/istatistikler/i12.png"
import i13 from "../assets/img/istatistikler/i13.png"
import i14 from "../assets/img/istatistikler/i14.png"
import i15 from "../assets/img/istatistikler/i15.png"
import i16 from "../assets/img/istatistikler/i16.png"
import i17 from "../assets/img/istatistikler/i17.png"
import i18 from "../assets/img/istatistikler/i18.png"
import i19 from "../assets/img/istatistikler/i19.png"
import i20 from "../assets/img/istatistikler/i20.png"
import classNames from 'classnames';
import 'animate.css';
const Contact = () => {
  return (
    <div className=" bg-gray-200 pt-24 pb-24">
      <Container className={classNames('animate__animated', 'animate__fadeInUp')}>
        <div className="text-center mb-12">
          <Typography className=" text-[#0c8390]" variant="h5">
            <strong>İSTATİSTİKLER</strong>
          </Typography>
          <Divider className="pt-5 ">
            <Typography className=" block w-10 h-1 bg-[#0c8390]   "></Typography>
          </Divider>
          <Typography className="pt-5" color="text.secondary">
            Sürekli güncellediğimiz Gelir İdaresi Başkanlığına ait
            istatistiklere aşağıdan ulaşabilirsiniz.
          </Typography>
        </div>
        <Container fixed>
          <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
            <Grid item md={6} xs={12}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={6}>
                  <img src={i3} alt="" />
                </Grid>
                <Grid item md={6} xs={6}>
                  <img src={i4} alt="" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={6} xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={i5} alt="" />
                </Grid>
                <Grid item xs={12}>
                  <img src={i6} alt="" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={6} xs={12}>
              <img src={i7} alt="" />
            </Grid>
            <Grid item md={6} xs={12}>
              <img src={i8} alt="" />
            </Grid>
            <Grid item md={6} xs={12}>
              <img src={i9} alt="" />
            </Grid>
            <Grid item md={6} xs={12}>
              <img src={i10} alt="" />
            </Grid>

            <Grid item md={6} xs={12}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={6}>
                  <img src={i11} alt="" />
                </Grid>
                <Grid item md={6} xs={6}>
                  <img src={i12} alt="" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={6} xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={i13} alt="" />
                </Grid>
                <Grid item xs={12}>
                  <img src={i14} alt="" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={6} xs={12}>
              <img src={i15} alt="" />
            </Grid>
            <Grid item md={6} xs={12}>
              <img src={i16} alt="" />
            </Grid>
            <Grid item md={6} xs={12}>
              <img src={i17} alt="" />
            </Grid>
            <Grid item md={6} xs={12}>
              <img src={i18} alt="" />
            </Grid>
            <Grid item md={6} xs={12}>
              <img src={i19} alt="" />
            </Grid>
            <Grid item md={6} xs={12}>
              <img src={i20} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Contact