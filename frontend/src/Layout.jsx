import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout({ language, toggleLanguage }) {
  return (
    <>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Outlet />
      <Footer language={language} />
    </>
  );
}

export default Layout;
