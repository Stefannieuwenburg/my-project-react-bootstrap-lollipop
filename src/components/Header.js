import React from "react"

import lollipopgirl from "./image/girl-lollipop-1.jpg"


const Header = () => {
    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container text-center">
                    <img
                        className="rounded-circle" style={{ width: "30rem" }}
                        src={lollipopgirl}
                        alt=""
                    />
                    <p class="display-4 text-center">Welcome to Candyland</p>
                </div>
            </div>
        </>
    );
}
export default Header;