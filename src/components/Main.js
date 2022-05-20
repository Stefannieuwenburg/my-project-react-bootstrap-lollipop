import React from "react";
import lollipop0 from "./image/lollipop-9.jpg";
import lollipop1 from "./image/lollipop-8.jpg";
import lollipop2 from "./image/lollipop-7.jpg";
const Main = () => { 
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="co mt-2 " style={{ width: "18rem" }}>
                        <div
                            class="card text-center"
                            style={{ width: "10rem" }}
                        >
                            <img
                                class="container text-center"
                                src={lollipop0}
                                alt=""
                                style={{ width: "10rem" }}
                            />
                            <div class="card-body">lollipop full collor</div>
                        </div>
                    </div>
                    <div class="col mt-2 ">
                        <div
                            class="card text-center"
                            style={{ width: "10rem" }}
                        >
                            <img
                                class="container text-center"
                                src={lollipop1}
                                alt=""
                                style={{ width: "10rem" }}
                            />
                            <div class="card-body">lollipop color</div>
                        </div>
                    </div>
                    <div class="col mt-2">
                        <div
                            class="card text-center"
                            style={{ width: "10rem" }}
                        >
                            <img
                                class="container text-center"
                                src={lollipop2}
                                alt=""
                                style={{ width: "10rem" }}
                            />
                            <div class="card-body">lollipop color</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main;