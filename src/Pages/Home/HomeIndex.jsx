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
import thumb3 from "../../Assets/thumb3.png";
import thumb4 from "../../Assets/thumb4.png";
// import bag from "../../Assets/shopping-bag.png";
import Features from "../../Components/Features/Features";
import ThankYou from "../../Components/ThankYou/ThankYou";

export default function HomeIndex() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [letter, setLetter] = useState("first");

  useEffect(() => {
    setTimeout(() => {
      setLetter("second");
    }, 5000);
    setTimeout(() => {
      setLetter("third");
    }, 10000);
  }, []);

  useEffect(() => {
    if (showThankYou === true) {
      setTimeout(() => {
        setShowThankYou(false);
        window.location.reload();
      }, 5000);
    }
  }, [showThankYou]);

  const firstVariants = {
    initialFade: {
      opacity: 0,
    },
    initialFade2: {
      opacity: 0,
      rotateX: "90deg",
      y: -20,
      transformPerspective: 500,
    },
    initialImg: {
      scale: 0,
    },
    animateFade: {
      opacity: 1,
      rotateX: "0deg",
      y: 0,
      transformPerspective: 500,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
    },
    animateFade2: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
      },
    },
    animateImg: {
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        delay: 0.4,
      },
    },
    exitFade: {
      opacity: 0,
      rotateX: "-90deg",
      y: 40,
      transformPerspective: 500,
      transition: {
        duration: 0.2,
      },
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
                      <motion.p
                        key={letter}
                        initial="initialFade2"
                        animate="animateFade"
                        exit="exitFade"
                        variants={firstVariants}
                        style={{
                          display: "inline-block",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Shopping
                      </motion.p>
                    )}
                    {letter === "second" && (
                      <motion.p
                        key={letter}
                        initial="initialFade2"
                        animate="animateFade"
                        exit="exitFade"
                        variants={firstVariants}
                        style={{
                          display: "inline-block",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Coffee
                      </motion.p>
                    )}
                    {letter === "third" && (
                      <motion.p
                        key={letter}
                        initial="initialFade2"
                        animate="animateFade"
                        exit="exitFade"
                        variants={firstVariants}
                        style={{
                          display: "inline-block",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        Investing
                      </motion.p>
                    )}
                  </AnimatePresence>{" "}
                  is... better with friends.
                </h1>
                <p className="home-para para montserrat">
                  Whether you are out shopping, sipping coffee or making big
                  life decisions, having a friend to do it is always better. Why
                  not start your investing journey with your best buds on Pints
                  today?
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
                            perMove: 1,
                            type: "loop",
                            width: "100%",
                            autoplay: "play",
                            interval: 5000,
                            drag: false,
                            breakpoints: {
                              600: {
                                drag: true,
                              },
                            },
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
                            height: "400px",
                            direction: "ttb",
                            arrows: false,
                            pagination: false,
                            perPage: 2,
                            perMove: 1,
                            gap: "15px",
                            pauseOnHover: false,
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
                              <img src={thumb3} alt="" className="slider-img" />
                            </div>
                          </SplideSlide>
                          <SplideSlide>
                            <div className="img-wrapper">
                              <img src={thumb4} alt="" className="slider-img" />
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
