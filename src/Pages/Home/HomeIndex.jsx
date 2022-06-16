import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./HomeIndex.css";
import shoppingBg from "../../Assets/shopping-bg.png";
import bag from "../../Assets/shopping-bag.png";
import coffeegBg from "../../Assets/coffee-bg.png";
import cup from "../../Assets/cup.png";
import mobileBg1 from "../../Assets/mobile-bg.png";
import mobileBg2 from "../../Assets/mobile-bg2.png";
import mobileBg3 from "../../Assets/mobile-bg3.png";
import thumb1 from "../../Assets/thumb1.png";
import thumb2 from "../../Assets/thumb2.png";
// import bag from "../../Assets/shopping-bag.png";
import Features from "../../Components/Features/Features";
import ThankYou from "../../Components/ThankYou/ThankYou";

export default function HomeIndex() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [letter, setLetter] = useState("third");

  useEffect(() => {
    // setTimeout(() => {
    //   setLetter("second");
    // }, 5000);
    // setTimeout(() => {
    //   setLetter("third");
    // }, 10000);
  }, []);

  useEffect(() => {
    if (showThankYou === true) {
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    }
  }, [showThankYou]);

  const firstVariants = {
    initialFade: {
      opacity: 0,
    },
    initialImg: {
      scale: 0,
    },
    animateFade: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    animateFade2: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1.1,
      },
    },
    animateImg: {
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exitFade: {
      opacity: 0,
    },
  };

  return (
    <>
      {showThankYou ? (
        <ThankYou />
      ) : (
        <>
          <div className="home">
            <div className="home-content">
              <div className="home-content-left">
                <h1 className="home-heading heading poppins">
                  <AnimatePresence exitBeforeEnter>
                    {letter === "first" && (
                      <motion.span
                        key={letter}
                        initial="initialFade"
                        animate="animateFade"
                        exit="exitFade"
                        variants={firstVariants}
                      >
                        Shopping
                      </motion.span>
                    )}
                    {letter === "second" && (
                      <motion.span
                        key={letter}
                        initial="initialFade"
                        animate="animateFade"
                        exit="exitFade"
                        variants={firstVariants}
                      >
                        Coffee
                      </motion.span>
                    )}
                    {letter === "third" && (
                      <motion.span
                        key={letter}
                        initial="initialFade"
                        animate="animateFade"
                        exit="exitFade"
                        variants={firstVariants}
                      >
                        Investing
                      </motion.span>
                    )}
                  </AnimatePresence>{" "}
                  is... better with friends.
                </h1>
                <p className="home-para para montserrat">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque
                </p>
                <div className="register-bar">
                  <button
                    className="register"
                    onClick={() => {
                      setShowThankYou(true);
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="home-content-right">
                <AnimatePresence key={letter}>
                  {letter === "first" ? (
                    <div className="page-1">
                      <motion.img
                        variants={firstVariants}
                        animate="animateImg"
                        initial="initialImg"
                        alt="..."
                        src={shoppingBg}
                        className="shopping-bg"
                      />
                      <motion.img
                        variants={firstVariants}
                        animate="animateFade2"
                        initial="initialFade"
                        alt="..."
                        src={bag}
                        className="bag"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  {letter === "second" ? (
                    <div className="page-2">
                      <motion.img
                        variants={firstVariants}
                        animate="animateImg"
                        initial="initialImg"
                        alt="..."
                        src={coffeegBg}
                        className="coffee-bg"
                      />
                      <motion.img
                        variants={firstVariants}
                        animate="animateFade2"
                        initial="initialFade"
                        alt="..."
                        src={cup}
                        className="cup"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  {letter === "third" ? (
                    <motion.div
                      className="page-3"
                      variants={firstVariants}
                      animate="animateFade"
                      initial="initialFade"
                    >
                      <div className="main-slider">
                        <Splide
                          options={{
                            rewind: true,
                            arrows: false,
                            pagination: false,
                            perPage: 1,
                            type: "fade",
                            width: "100%",
                            autoplay: "play",
                            interval: 5000,
                            drag: false,
                          }}
                          className="main-slider2"
                        >
                          <SplideSlide>
                            <div className="img-wrapper2">
                              <img
                                src={mobileBg1}
                                alt=""
                                className="slider-img"
                              />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="img-wrapper2">
                              <img
                                src={mobileBg2}
                                alt=""
                                className="slider-img"
                              />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="img-wrapper2">
                              <img
                                src={mobileBg3}
                                alt=""
                                className="slider-img"
                              />
                            </div>
                          </SplideSlide>
                        </Splide>
                      </div>
                      <div className="bg-slider">
                        <Splide
                          options={{
                            autoplay: "play",
                            interval: 5000,
                            height: "450px",
                            direction: "ttb",
                            arrows: false,
                            pagination: false,
                            perPage: 2,
                            perMove: 1,
                            gap: "20px",
                            drag: false,
                            type: "loop",
                          }}
                          className="thumb-slider"
                        >
                          <SplideSlide>
                            <div className="img-wrapper">
                              <img src={thumb1} alt="" className="slider-img" />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="img-wrapper">
                              <img src={thumb2} alt="" className="slider-img" />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="img-wrapper">
                              <img src={thumb1} alt="" className="slider-img" />
                            </div>
                          </SplideSlide>
                        </Splide>
                      </div>
                    </motion.div>
                  ) : (
                    ""
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <Features />
        </>
      )}
    </>
  );
}
