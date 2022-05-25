import { Container } from "react-bootstrap";
import React from "react";
import { FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <Container className="text-center">
                <div>
                    {" "}
                    <p style={{ fontSize: "15px" }}>
                        Copyright &copy;{new Date().getFullYear()} by Me
                    </p>
                    <FaLinkedinIn
                        style={{ fontSize: "30px", color: "grey" }}
                    ></FaLinkedinIn>
                    <FaFacebook style={{ fontSize: "30px", color: "grey" }} />
                    <FaGithub style={{ fontSize: "30px", color: "grey" }} />
                </div>
            </Container>
        </footer>
    );
};
export default Footer;
