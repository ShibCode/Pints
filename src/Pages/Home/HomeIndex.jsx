import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./HomeIndex.css";
import shoppingBg from "../../Assets/shopping-bg.png";
import bag from "../../Assets/shopping-bag.png";
import coffeegBg from "../../Assets/coffee-bg.png";
import cup from "../../Assets/cup.png";
import mobileBg from "../../Assets/mobile-bg.png";
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
                    <div className="page-3">
                      <motion.img
                        variants={firstVariants}
                        animate="animateImg"
                        initial="initialImg"
                        alt="..."
                        src={mobileBg}
                        className="mobile-bg"
                      />
                      {/* <img alt="..." src={bag} className="bag" /> */}
                    </div>
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
