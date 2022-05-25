import React from "react";

import lollipopgirl from "../assets/girl-lollipop-1.jpg";



const Home = () => (
    <>
        <div class="jumbotron jumbotron-fluid">
            <div class="container text-center">
                <img
                    className="rounded-circle"
                    style={{ width: "30rem" }}
                    src={lollipopgirl}
                    alt=""
                />
                <p class="display-4 text-center">Welcome to Candyland</p>
            </div>
        </div>
    </>
);

export default Home;
