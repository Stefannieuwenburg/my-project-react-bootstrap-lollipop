import React from "react";

import { Card } from "react-bootstrap"
import AboutPicture from "../assets/lollipop-5.jpg"


const About = () => (
    <>
        <Card>
            <Card.Img
                variant="top"
                src={AboutPicture}
                style={{ width: "40rem" }}
            />
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    </>
);

export default About;
