import styled from "styled-components";
import retangleImg from '../../images/auth-retangle.png';
import slide1 from '../../images/slides/slide1.png';
import slide2 from '../../images/slides/slide2.png';
import slide3 from '../../images/slides/slide3.png';
import { useEffect, useState } from "react";
import { AuthText } from "./common/AuthText.styled";
import { motion } from "framer-motion";

const Slider = styled(motion.div)`
  margin: 0 0 ${p => p.theme.spaces.m} 0 ;
  background-image: url(${p => p.slide});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 490px 333px;
`;

export const AuthSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidePicker = (idx) => {
    const slides = [slide1, slide2, slide3];
    return slides[idx];
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevState => {
        if (prevState === 2) {
          return 0;
        }
        return prevState +=1
      })
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Slider
        slide={slidePicker(currentSlide)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1],
        }}
      
      >
        <img src={retangleImg} alt="Laptop" />
      </Slider>
      <AuthText
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.5, 0.71, 1, 1],
        }}
        weight="700"
        margin="20px"
      >
        Lorem ipsum dolor sit
      </AuthText>
      <AuthText
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.5, 0.71, 1, 1],
        }}
        weight="300"
        margin="0"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia
      </AuthText>
    </>
  );
};