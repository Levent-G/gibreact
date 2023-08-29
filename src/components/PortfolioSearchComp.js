import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const currencies = [
  {
    value: "ilan",
    label: "developer",
  },
  {
    value: "ilan",
    label: "Veri Tabani",
  },
  {
    value: "ilan",
    label: "İş Analisti",
  },
  {
    value: "ilan",
    label: "Test Mühendisi",
  },
  {
    value: "ilan",
    label: "Yazılım Destek Uzmanı",
  },
  {
    value: "ilan",
    label: "İş Zekası Uzmanı",
  },
  {
    value: "ilan",
    label: "Siber Güvenlik Uzmanı",
  },
  {
    value: "ilan",
    label: "Bilişim Sistemleri Uzmanı",
  },
  {
    value: "ilan",
    label: "Bilişim Sistemleri Devops Uzmanı",
  },
];
const PortfolioSearchComp = () => {
   
    
  return (
    <div className='pt-12 px-12'>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6} className='pr-12'>
            <TextField
              id="outlined-select-currency"
              select
              label="Tümünü Göster"
              defaultValue="Tümünü Göster"
              fullWidth
            
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid xs={6}>
            <TextField
              id="outlined-search"
              label="Search "
              type="search"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default PortfolioSearchComp