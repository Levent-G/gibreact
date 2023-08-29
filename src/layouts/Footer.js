import React from 'react'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material'
import footerlogo from "../assets/img/footerlogo.svg"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className="mt-24 ">
      <Container>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={12} md={4}>
            <img
              src={footerlogo}
              alt=""
              className="max-w-[200px] max-h-[70px]"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h4 className="text-[16px] font-bold text-[#0c8390] pb-3">
              Kurum içi Linkler
            </h4>
            <ul>
              <li >
                <KeyboardArrowRightIcon className="text-[#47b2e4]" />{" "}
                <a
                  href="https://www.hmb.gov.tr"
                  className="text-[#777777] inline-block"
                >
                  T.C. Hazine ve Maliye Bakanlığı
                </a>
              </li>
              <li className='mt-5'>
                <KeyboardArrowRightIcon className="text-[#47b2e4]" />{" "}
                <a
                  href="https://www.gib.gov.tr/"
                  className="text-[#777777] inline-block"
                >
                  Gelir İdaresi Başkanlığı
                </a>
              </li>
              <li className='mt-5'>
                <KeyboardArrowRightIcon className="text-[#47b2e4]" />{" "}
                <a
                  href="https://www.turkiye.gov.tr/"
                  className="text-[#777777] inline-block"
                >
                  e-Devlet
                </a>
              </li>
              <li className='mt-5'>
                <KeyboardArrowRightIcon className="text-[#47b2e4]" />{" "}
                <a
                  href="http://www.vergibilinci.gov.tr/"
                  className="text-[#777777] inline-block"
                >
                  Vergi Bilinci
                </a>
              </li>
              <li className='mt-5'>
                <KeyboardArrowRightIcon className="text-[#47b2e4]" />{" "}
                <a
                  href="http://vergihaftasi.gov.tr/"
                  className="text-[#777777] inline-block"
                >
                  Vergi Haftası
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <h4 className="text-[16px] font-bold text-[#0c8390] pb-3">
              Hizmetler
            </h4>
            <ul>
              <li >
                <KeyboardArrowRightIcon className="text-[#47b2e4]" />{" "}
                <a
                  href="https://ivd.gib.gov.tr"
                  className="text-[#777777] inline-block"
                >
                  İnteraktif Vergi Dairesi
                </a>
              </li>
              <li className='mt-5'>
                <KeyboardArrowRightIcon className="text-[#47b2e4]" />{" "}
                <a
                  href="https://intvrg.gib.gov.tr"
                  className="text-[#777777] inline-block"
                >
                  İnternet Vergi Dairesi
                </a>
              </li>
              <li className='mt-5'>
                <KeyboardArrowRightIcon className="text-[#47b2e4]" />{" "}
                <a
                  href="https://www.defterbeyan.gov.tr"
                  className="text-[#777777] inline-block"
                >
                  Defter Beyan
                </a>
              </li>
              <li className='mt-5'>
                <KeyboardArrowRightIcon className="text-[#47b2e4]" />{" "}
                <a
                  href="https://hazirbeyan.gib.gov.tr"
                  className="text-[#777777] inline-block"
                >
                  Hazır Beyan
                </a>
              </li>
              <li className='mt-5'>
                <KeyboardArrowRightIcon className="text-[#47b2e4]" />{" "}
                <a
                  href="https://gibux.gib.gov.tr/"
                  className="text-[#777777] inline-block"
                >
                  GİBUX
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <h4 className="text-[16px] font-bold text-[#0c8390] pb-3">
              Sosyal Ağlar
            </h4>
            <p className="text-[#777777] inline-block">
              Bizi sosyal ağlar üzerinden takip ederek tüm gelişmelerden
              haberdar olabilirsiniz.
            </p>
            <div className="mt-3">
              <a href="https://twitter.com/gibsosyalmedya">
                <TwitterIcon
                  className=" bg-[#0c8390] text-[#fff] rounded-[50%]  p-2 mr-2  "
                  sx={{ width: "36px", height: "36px" }}
                />
              </a>
              <a href="https://tr-tr.facebook.com/gibsosyalmedya">
                <FacebookIcon
                  className=" bg-[#0c8390] text-[#fff] rounded-[50%]  p-2  mr-2  "
                  sx={{ width: "36px", height: "36px" }}
                />
              </a>
              <a href="https://www.instagram.com/gibsosyalmedya/">
                <InstagramIcon
                  className=" bg-[#0c8390] text-[#fff] rounded-[50%]  p-2 mr-2   "
                  sx={{ width: "36px", height: "36px" }}
                />
              </a>
              <a href="https://tr.linkedin.com/company/gibsosyalmedya">
                <LinkedInIcon
                  className=" bg-[#0c8390] text-[#fff] rounded-[50%]  p-2  mr-2  "
                  sx={{ width: "36px", height: "36px" }}
                />
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{
          background:
            " linear-gradient(270deg, #350033 , #223C5E 52%, #0B8692 100%)  ",
          boxShadow: "none",
        }}
        className="p-7 text-[12px] text-center  mt-14"
      >
        <div className="text-white float-left pl-12">
          &copy; Bu sitenin tüm hakları Gelir İdaresi Başkanlığına aittir.
        </div>
        <div className="text-white text-right pr-40">
          Yayınlanma Tarihi: 2022
        </div>
      </div>
    </div>
  );
}

export default Footer
