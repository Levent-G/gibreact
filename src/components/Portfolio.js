import { Container, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import PortfolioSearchComp from './PortfolioSearchComp';
import PortfolioCardComp from './PortfolioCardComp';

import 'animate.css';
const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`animate__animated 'animate__duration-2s' ${isVisible ? 'animate__zoomInDown'  : ''}`}>
      <Container className="p-16 ">
        <p  className="text-center text-[#0c8390] font-bold text-3xl ">
          GİB TEKNOLOJİ İŞ İLANLARI
        </p>
        <Divider  className='pt-5'>
          <Typography className=" block w-10 h-1 bg-[#0c8390]   "></Typography>
        </Divider>
        <Typography className="text-center pt-5">
          Başkanlığımızın teknoloji ekiplerinde yer alarak vergi
          uygulamalarındaki dijital dönüşümün bir parçası olacak çalışma
          arkadaşları arıyoruz.Aşağıdaki ilanlardan size uygun olan ilana
          tıklayıp detaylı bilgi alarak başvuru yapabilirsiniz.
        </Typography>
        <PortfolioSearchComp/>
        <PortfolioCardComp/>
      </Container>
    </div>
  );
}

export default Portfolio