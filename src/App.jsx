import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./componetns/Hero/Hero";
import Loader from "./componetns/Loader/Loader";
import Anim from "./componetns/Anim/Anim";
import CustomCursor from "./componetns/CustomCursor/CustomCursor";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Имитация загрузки 3 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Hero/> }

      <CustomCursor/>
      
    </>
  );
};

export default App;
