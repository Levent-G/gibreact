import React from 'react'
import { Container,Divider,Typography } from '@mui/material';
import ServicesCardComp from './ServicesCardComp';
import classNames from 'classnames';
import 'animate.css';
const Services = () => {
  return (
    <div className="bg-gray-200 p-12">
      <Container className={classNames('animate__animated', 'animate__fadeInUp')}>
        <div className="text-center">
          <Typography className=" text-[#0c8390]" variant="h5">
            <strong>KULLANILAN TEKNOLOJİLER</strong>
          </Typography>
          <Divider className="pt-5">
            <Typography className=" block w-10 h-1 bg-[#0c8390]   "></Typography>
          </Divider>
          <Typography className="pt-5" color="text.secondary">
            Projelerimizde kullandığımız teknolojilerden bazılarını aşağıda
            görebilirsiniz.
          </Typography>
        </div>

        <ServicesCardComp />
      </Container>
    </div>
  );
}

export default Services