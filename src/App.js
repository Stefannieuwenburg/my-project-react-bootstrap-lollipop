import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () =>  (
    <>
            <React.Fragment>
                <BrowserRouter>
                        <Routes>
                        <Route path="/" element={<NavigationBar />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                            </Route>
                    </Routes>
            </BrowserRouter>
            <Footer />
    </React.Fragment>
    </>
);
 
   
export default App;





