import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  {CardActionArea}  from '@mui/material';
import { Link } from "react-router-dom";
import { useData } from "../context/ContextProvider";


const PortfolioCardComp = () => {
  const {currencies} = useData();
  return (
    <div className="pt-8 bg-gray-100">
      {" "}
      {currencies.map((option,index) => (
        <Link to={`/gibtekonoloji/${option?.label}`} variant="body2" key={index}>
          <Card className="mt-5" sx={{ boxShadow: 3 }}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-[#0c8390]"
                >
                  {option.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  İlanla ilgili bilgi almak ve başvurmak için tıklayınız.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default PortfolioCardComp