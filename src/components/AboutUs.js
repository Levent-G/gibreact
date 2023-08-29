import React from 'react'
import { Container, Divider, Typography } from '@mui/material'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useData } from "../context/ContextProvider";
const AboutUs = (props) => {
    const {currencies} = useData();
    const ilan = currencies.find(currency => currency.label === props.state);
  return (
    <div className="mt-12">
      <p className="text-center text-[#0c8390] font-bold text-3xl ">
        ARANAN NİTELİKLER VE İŞ TANIMI
      </p>
      <Divider className="pt-5">
        <Typography className=" block w-10 h-1 bg-[#0c8390]   "></Typography>
      </Divider>

      <Container className="mt-12">
        <Box>
          <Grid container spacing={1}>
            <Grid xs={12} md={6} sm={12} className='mb-5'>
              <Typography variant="h6" className="text-[#0c8390] ">
                <strong>Aranan Nitelikler</strong>
              </Typography>
              <p>
                İlanda aranan niteliklerin size uygun olduğunu düşünüyorsanız
                Özgeçmişlerinizi{" "}
                <button href="#" className="text-[#0c8390]">
                  kariyer@gelirler.gov.tr
                </button>{" "}
                adresine konu kısmına “{ilan.code}” yazarak gönderebilirsiniz
              </p>
              <ul className="mt-5">
                {ilan.req.map((requirement, index) => (
                  <li className="mt-5">
                    <i className=" pt-5 text-[#0c8390]">
                      <DoneAllIcon style={{ width: "20px", height: "20px" }} />
                    </i>
                    {requirement}
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid xs={12} md={6} sm={12} className="pl-5">
              <Typography variant="h6" className="text-[#0c8390] ">
                <strong>İş Tanımı</strong>
              </Typography>
              <p>
                Başkanlığımızın teknoloji ekiplerinde yer alarak vergi
                uygulamalarındaki dijital dönüşümün bir parçası olacak çalışma
                arkadaşları arıyoruz.
              </p>
              <button className="hover:bg-[#0c8390]  hover:text-white rounded   border-2  px-8 py-1 mt-5  text-[#0c8390] bg-white border-[#0c8390]">
                Başvur
              </button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default AboutUs