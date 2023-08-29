import React from 'react'
import İlanHeroComp from "../components/İlanHeroComp";
import { useParams } from "react-router-dom";
import CliensComp from '../components/CliensComp';
import AboutUs from '../components/AboutUs';
const IlanPage = () => {
  const { ilanname } = useParams();
  return (
    <div>
      <İlanHeroComp state={ilanname} />
      <CliensComp />
      <AboutUs state={ilanname} />
    </div>
  );
}

export default IlanPage
