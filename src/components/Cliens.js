import * as React from 'react';
import Grid from '@mui/material/Grid';
import c1 from "../assets/img/c1.png"
import c2 from "../assets/img/c2.png"
import c3 from "../assets/img/c3.png"
import c4 from "../assets/img/c4.svg"
import c5 from "../assets/img/c5.svg"
import c6 from "../assets/img/c6.svg"
import { Container } from '@mui/material';
import classNames from 'classnames';
import 'animate.css';
const Cliens = () => {
    
  return (
    <div className="bg-gray-200  p-6" >
       <Container className={classNames('animate__animated', 'animate__zoomIn')} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={6} md={2}>
          <img src={c1} alt="" className='w-3/6 inline-block grayscale hover:filter-none mt-5'/>
        </Grid>
        <Grid item xs={6} md={2}>
         <img src={c2} alt="" className='w-3/6 inline-block grayscale hover:filter-none'/>
        </Grid>
        <Grid item xs={6} md={2}>
          <img src={c3} alt="" className='w-3/6 inline-block  grayscale hover:filter-none mt-5'/>
        </Grid>
        <Grid item xs={6} md={2}>
         <img src={c4} alt="" className='w-3/6 inline-block  grayscale hover:filter-none'/>
        </Grid>
        <Grid item xs={6} md={2}>
          <img src={c5} alt="" className='w-3/6 inline-block  grayscale hover:filter-none mt-3'/>
        </Grid> 
        <Grid item xs={6} md={2}>
          <img src={c6} alt="" className='w-3/6 inline-block grayscale hover:filter-none mt-5'/>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default Cliens