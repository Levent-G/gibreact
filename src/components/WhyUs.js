import React from 'react'
import whyus from "../assets/img/whyus.png"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container,Typography } from '@mui/material';
import Card from '@mui/material/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import classNames from 'classnames';
import 'animate.css';
const WhyUs = () => {
    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleExpandClick2 = () => {
      setExpanded2(!expanded2);
    };

    const handleExpandClick3 = () => {
      setExpanded3(!expanded3);
    };
  return (
    <div className="bg-gray-200 ">
      <Container className={classNames('animate__animated', 'animate__fadeInUp')}>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid xs={6} md={7}>
              <div className="p-12 ">
                <Typography className="text-[#0c8390] " variant="h4">
                  Hayat Kolaylaştıran <strong>Yenilikçi Projeler</strong>{" "}
                </Typography>
                <Typography color="text.secondary" className="pt-2 ">
                  Türkiye'deki dijital dönüşümün lider kurumları arasında yer
                  alan Başkanlığımız tarafından geliştirilen uygulamaların
                  bazılarına aşağıda yer verilmiştir.
                </Typography>
                <Card className="p-3 mt-5">
                  <Typography>
                    <span className="text-[#0c8390] font-semibold text-xl pr-3">
                      01
                    </span>{" "}
                    e-VDB{" "}
                    <IconButton
                      aria-label="comment"
                      onClick={handleExpandClick}
                      className="float-right"
                    >
                      <ExpandMoreIcon
                        expand={expanded}
                        aria-expanded={expanded}
                      ></ExpandMoreIcon>
                    </IconButton>
                  </Typography>

                  <Collapse
                    in={expanded}
                    timeout="auto"
                    unmountOnExit
                    className="pt-5"
                  >
                    <Typography>
                      1990’lı yıllarda VEDOP adıyla başlayan vergi dairesi
                      otomasyon uygulamalarına ilişkin süreçte, teknolojinin
                      getirdiği imkânlardan yararlanarak 2015 yılında Elektronik
                      Vergi Dairesi Başkanlığı (e-VDB) uygulaması hayata
                      geçirilmiştir. Vergi dairesindeki süreçlerin tamamı
                      elektronik ortamda gerçekleştirilmektedir.
                    </Typography>
                  </Collapse>
                </Card>

                <Card className="p-3 mt-5">
                  <Typography>
                    <span className="text-[#0c8390] font-semibold text-xl pr-3">
                      02
                    </span>{" "}
                    İnteraktif Vergi Dairesi{" "}
                    <IconButton
                      aria-label="comment"
                      onClick={handleExpandClick2}
                      className="float-right"
                    >
                      <ExpandMoreIcon
                        expand={expanded2}
                        aria-expanded={expanded2}
                      ></ExpandMoreIcon>
                    </IconButton>
                  </Typography>
                  <Collapse
                    in={expanded2}
                    timeout="auto"
                    unmountOnExit
                    className="pt-5"
                  >
                    <Typography className="pt-5">
                      Başkanlığımız tarafından sunulan hizmetlerden kişilerin
                      elektronik ortamda yararlanabilmesi; vergisel
                      yükümlülüklerin mükelleflerce kolay ve hızlı bir şekilde
                      yerine getirilebilmesi, beyanname, bildirim, yazı,
                      dilekçe, tutanak, rapor ve diğer belgelerin elektronik
                      ortamda verilebilmesi ve bu belgelere ilişkin yapılan
                      işlemlerin sonuçlarının ilgililerine elektronik ortamda
                      gösterilmesi amacıyla oluşturulan İnteraktif Vergi Dairesi
                      toplam 50 adet hizmet ile 28 Şubat 2018 tarihinde
                      vatandaşların ve mükelleflerin kullanımına açılmış olup,
                      hem internet sayfası (www.ivd.gib.gov.tr) üzerinden hem de
                      mobil uygulaması (GİB MOBİL) aracılığıyla hizmet
                      sunulmaktadır. Projenin geliştirilmesi kapsamında, 2021
                      yılında web sürümde 6 adet yeni hizmet ilave edilerek
                      toplam hizmet sayısı 206 adede ulaşmıştır. İnteraktif
                      Vergi Dairesi mobil sürümünde ise 2021 yılında 10 adet
                      yeni hizmet ilave edilmiş olup toplam hizmet sayısı 126
                      adede ulaşmıştır. 2021 yılında toplam işlem sayısı
                      14.600.079 olup, online kayıt sayısı ise 1.519.395 olarak
                      gerçekleşmiştir.
                    </Typography>
                  </Collapse>
                </Card>

                <Card className="p-3 mt-5">
                  <Typography>
                    <span className="text-[#0c8390] font-semibold text-xl pr-3">
                      03
                    </span>{" "}
                    GİBUX{" "}
                    <IconButton
                      aria-label="comment"
                      onClick={handleExpandClick3}
                      className="float-right"
                    >
                      <ExpandMoreIcon
                        expand={expanded3}
                        aria-expanded={expanded3}
                      ></ExpandMoreIcon>
                    </IconButton>
                  </Typography>
                  <Collapse
                    in={expanded3}
                    timeout="auto"
                    unmountOnExit
                    className="pt-5"
                  >
                    <Typography className="pt-5">
                      Açık kaynak kod tabanlı işletim sistemi GİBUX,
                      Başkanlığımızın yurt genelindeki tüm vergi daireleri ve
                      malmüdürlüklerinde kullanılması amacıyla Türk mühendisleri
                      tarafından analiz ve tasarımı yapılarak Başkanlığımızın
                      ihtiyaçlarına uygun olarak geliştirilmiştir. Başkanlığımız
                      açısından lisans bağımlılığını ortadan kaldıran GİBUX,
                      1.1.84 lokasyonda 37.301 masaüstü bilgisayarı ve 515
                      sunucuda kullanılmaktadır.
                    </Typography>
                  </Collapse>
                </Card>
                <button className="bg-[#0c8390] w-full text-white rounded border-spacing-1 border-solid border-2 p-4 pl-8 mt-5 text-left hover:text-[#0c8390] hover:bg-white border-[#0c8390]">
                  Tüm Hizmetlerimiz
                </button>
              </div>
            </Grid>
            <Grid xs={6} md={5}>
              <div>
                <img src={whyus} alt="" className=" my-24 " />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default WhyUs