import React from "react";
import "../App.css";

import lolpop from "../components/image/lolpop.png";

const NavsBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="navbar-brand text-warning">
                    Lollipop CandyLand
                </div>
                <img
                    src={lolpop}
                    width="30"
                    height="30"
                    class="d-inline-block align-top"
                    alt=""
                />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="//">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " href="//">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " href="//">
                                Pricing
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );

};

export default NavsBar;
