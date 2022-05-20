import React from 'react';
import NavsBar from "./components/NavsBar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";


const Layout = () => {
    return (
        <>
            <NavsBar />
            <Header />
            <Main />
            <Footer/>
    </>
    );
};

export default Layout;
