import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import HomeIndex from "./Pages/Home/HomeIndex";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <HomeIndex />
      <Footer />
    </>
  );
}

export default App;
