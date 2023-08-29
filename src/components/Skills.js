import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import skills from "../assets/img/skills.png";
import LinearProgress from "@mui/material/LinearProgress";
import classNames from 'classnames';
import 'animate.css';
const Skills = () => {
  const [progress, setProgress] = useState("");
  const [progress2, setProgress2] = React.useState("");
  const [progress3, setProgress3] = React.useState("");
  const [progress4, setProgress4] = React.useState("");

  useEffect(() => {
    setProgress(91);
    setProgress2(41);
    setProgress3(95);
    setProgress4(60);
  }, []);

  return (
    <div className="pt-24 p-12">
      <Container className={classNames('animate__animated', 'animate__fadeInUp')}>
        <Box>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid xs={6} md={5}>
              {" "}
              <div>
                <img src={skills} alt="" />
              </div>
            </Grid>
            <Grid xs={6} md={7}>
              <div className="ml-5">
                <Typography variant="h5">
                  <strong className="text-[#0c8390]">
                    KURUM ÇALIŞAN PROFİLİ
                  </strong>
                </Typography>
                <Typography className="italic">
                  <span>
                    Gelir İdaresi Başkanlığının çalışan profilini gösteren
                    istatistikleri aşağıdan inceleyebilirsiniz.
                  </span>
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center" }}
                  className="mt-4"
                >
                  <Box sx={{ width: "100%", mr: 1 }}>
                    <strong className="text-[12px] text-[#0c8390] ">
                      ÜNİVERSİTE VE YÜKSEK LİSANS MEZUNU ORANI
                    </strong>
                    <LinearProgress
                      variant="determinate"
                      color="secondary"
                      value={progress}
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }} className="mt-4">
                    <Typography variant="body2" color="text.secondary">
                      %91
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center" }}
                  className="mt-4"
                >
                  <Box sx={{ width: "100%", mr: 1 }}>
                    <strong className="text-[12px] text-[#0c8390] ">
                      KADIN ÇALIŞAN ORANI
                    </strong>
                    <LinearProgress
                      variant="determinate"
                      color="secondary"
                      value={progress2}
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }} className="mt-4">
                    <Typography variant="body2" color="text.secondary">
                      %41
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center" }}
                  className="mt-4"
                >
                  <Box sx={{ width: "100%", mr: 1 }}>
                    <strong className="text-[12px] text-[#0c8390] ">
                      ÇALIŞAN TALEPLERİ GERÇEKLEŞTİRME ORANI
                    </strong>
                    <LinearProgress
                      variant="determinate"
                      color="secondary"
                      value={progress3}
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }} className="mt-4">
                    <Typography variant="body2" color="text.secondary">
                      %95
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center" }}
                  className="mt-4"
                >
                  <Box sx={{ width: "100%", mr: 1 }}>
                    <strong className="text-[12px] text-[#0c8390] ">
                      5 YILDAN UZUN SÜRELİ ÇALIŞAN ORANI
                    </strong>
                    <LinearProgress
                      variant="determinate"
                      color="secondary"
                      value={progress4}
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }} className="mt-4">
                    <Typography variant="body2" color="text.secondary">
                      %60
                    </Typography>
                  </Box>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Skills;
