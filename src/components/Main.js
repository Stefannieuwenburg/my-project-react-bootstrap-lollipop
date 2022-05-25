import { Container,Col } from "react-bootstrap";
import React from "react";
import lollipop0 from "./image/lollipop-9.jpg";
import lollipop1 from "./image/lollipop-8.jpg";
import lollipop2 from "./image/lollipop-7.jpg";
const Main = () => {
    return (
        <>
            <Container>
                <div className="row">
                    <div className="co mt-2 " style={{ width: "18rem" }}>
                        <div
                            className="card text-center"
                            style={{ width: "10rem" }}
                        >
                            <img
                                className="container text-center"
                                src={lollipop0}
                                alt=""
                                style={{ width: "10rem" }}
                            />
                            <div className="card-body">lollipop full collor</div>
                        </div>
                    </div>
                    <Col className="mt-2">
                        <div
                            className="card text-center"
                            style={{ width: "10rem" }}
                        >
                            <img
                                className="container text-center"
                                src={lollipop1}
                                alt=""
                                style={{ width: "10rem" }}
                            />
                            <div className="card-body">lollipop color</div>
                        </div>
                    </Col>
                    <div className="col mt-2">
                        <div
                            className="card text-center"
                            style={{ width: "10rem" }}
                        >
                            <img
                                className="container text-center"
                                src={lollipop2}
                                alt=""
                                style={{ width: "10rem" }}
                            />
                            <div className="card-body">lollipop color</div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
export default Main;
