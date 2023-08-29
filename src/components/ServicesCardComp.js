import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  {CardActionArea}  from '@mui/material';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
const currencies = [
    {
      value: "ilan",
      label: "REACT.JS",
      text:"Interaktif ve E-beyanname projelerinde fonksiyonel komponentler oluşturmak için kullanılmaktadır.",
      icon:"PersonalVideoIcon",
    },
    {
      value: "ilan",
      label: "JAVASCRIPT",
      text:"Tüm projelerde doğrudan veya dolaylı yolla javascript kullanılmaktadır.",
    },
    {
        value: "ilan",
        label: "ANGULAR",
        text:"E-belge projesinde kullanılmaktadır.",
      },
      {
        value: "ilan",
        label: "NEXT JS",
        text:"Seo optimizasyonu ve routing yapısı interaktif vergi dairesinde kullanılmaktadır.",
      },
      {
        value: "ilan",
        label: "KUBERNETES",
        text:"Tüm yeni projelerde container orkestrasyonu için ve kolay ölçekleme, hızlı deploy için kubernetes kullanılmaktadır.",
      },
      {
        value: "ilan",
        label: "GITLAB",
        text:"Nerdeyse tüm projelerde versiyon kontrolü ve sürekli teslimat için Gitlab kullanılmaktadır.",
      },
      {
        value: "ilan",
        label: "DOCKER",
        text:"Tüm yeni projeler dockerize edilerek Nexus sunucuna uygun versiyonla yüklenmektedir.",
      },
      {
        value: "ilan",
        label: "JAVA",
        text:"Nerdeyse tüm backend projelerinde Java 8-11 kullanılmaktadır.",
      },
      {
        value: "ilan",
        label: "SPRING BOOT",
        text:"Tüm yeni projelerde hızlı ilklendirme ve oto konfigürasyonlardan faydalanmak için Spring Boot framework kullanılmaktadır.",
      },
      {
        value: "ilan",
        label: "SPRING DATA",
        text:"Veritabanı CRUD işlemlerinde lüzumsuz boilerplate kod yazmamak için tüm yeni projelerde kullanılmaktadır.",
      },
      {
        value: "ilan",
        label: "POSTGRESQL",
        text:"Yeni projelerde açık kaynak kodlu PostgreSQL’in gelişmiş özelliklerinden faydalanılmakdatır.",
      },
      {
        value: "ilan",
        label: "ELASTIC SEARCH",
        text:"Log yönetimi, Performans İzleme ve Arama Ekranları gibi pek çok işte aktif olarak kullanılmaktadır.",
      },

  ];
const ServicesCardComp = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {currencies.map((option) => (
            <Grid item xs={12} sm={12} md={3}>
              <Card
                className="m-3 p-4 min-h-[275px] min-w-[235px]"
                sx={{ boxShadow: 3 }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography>
                      <PersonalVideoIcon
                        className="w-9 h-24 text-[#47b2e4]"
                        sx={{ width: "36px", height: "36px" }}
                      />
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="text-[#0c8390] pt-2"
                    >
                      {option.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {option.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ServicesCardComp