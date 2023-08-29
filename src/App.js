import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./pages/HomePage"; 
import TopBar from "./layouts/TopBar";
import Top from "./layouts/Top";
import IlanPage from './pages/IlanPage';
import Footer from './layouts/Footer'
import { ContextProvider } from "./context/ContextProvider";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simülasyon amaçlı olarak 3 saniye boyunca yükleme durumunu devam ettirin
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <ContextProvider>
        <div className="App font-sans">
      {isLoading ? (
        <div className="loading">
          <Box
            sx={{ display: "flex" }}
            className="w-screen h-screen bg-[#37517e] text-white  text-center"
          >
            <CircularProgress
              className="absolute left-1/2 top-1/2 text-white"
              color="inherit"
            />
          </Box>
        </div>
      ) : (
        <div className="content">
          <BrowserRouter>
            <TopBar />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/gibtekonoloji/:ilanname" element={<IlanPage />} />
            </Routes>
            <Footer/>
            <Top />
          </BrowserRouter>
        </div>
      )}
    </div>
    </ContextProvider>
  
  );
}

export default App;
 