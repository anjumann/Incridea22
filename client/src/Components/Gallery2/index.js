import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import "./assets/css/css_for_fonts.css"

import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
// import About from "./sections/About";
import IncrediaPhotos from "./sections/IncrediaPhotos";
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
// import Banner from "./sections/Banner";
// import NewArrival from "./sections/NewArrival";
import Footer from './sections/Footer';
import Loader from "./components/Loader";
// import Buttons from "./sections/Buttons";


function Gallery2() {
  const containerRef = useRef(null);
  console.log("containerRef: "+containerRef);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [])
  

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark} >
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone:{
              smooth:true,
            },
            tablet:{
              smooth:true,
            }
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
        <AnimatePresence>
        {loaded ? null : <Loader />}
        <ScrollTriggerProxy />
        </AnimatePresence>
          <AnimatePresence>
          <main className='Gallery2' data-scroll-container ref={containerRef} >
            <Home />
            {/* <Buttons/> */}
            {/* <About /> */}
            <IncrediaPhotos id='2020' elementnumber={1} title="2020"/>
            <IncrediaPhotos id='2019' elementnumber={2} title="2019"/>
            <IncrediaPhotos id='2018' elementnumber={3} title="2018"/>

            {/* <Banner /> */}
            {/* <NewArrival /> */}
            <Footer />
          </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default Gallery2;
