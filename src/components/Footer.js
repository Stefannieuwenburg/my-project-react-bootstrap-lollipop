import React from 'react';
import { FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="text-center">
                <div>
                    {" "}
                    <p style={{ fontSize: "18px" }}>
                        Copyright &copy;2022 by Me
                    </p>
                    <FaLinkedinIn
                        style={{ fontSize: "18px", color: "grey" }}
                    ></FaLinkedinIn>
                    <FaFacebook style={{ fontSize: "18px", color: "grey" }} />
                    <FaGithub style={{ fontSize: "18px", color: "grey" }} />
                </div>
                
            </div>
        </>
    );
}
export default Footer;