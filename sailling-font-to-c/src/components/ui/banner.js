import React from "react";
import BannerSvg from "../BannerSvg";

import "../../asset/css/layout.css"
import "../../asset/css/text.css"

const banner = () => {
    return (
        <div className="box">
            <div className="w5">
                <div className="">
                    <h1 className="hero-title">
                        web & mobile development partner
                    </h1>
                    <p>
                        We are producet developers, advisors and engineers solving business challenges via <br></br>creating future-ready apps, websites and digital solutions.
                    </p>

                    <div className="hero-btn-holder">
                        <button className="magnet btn">
                            let's talk business
                        </button>
                    </div>
                </div>

            </div>
            <BannerSvg/>

        </div>
    );
}
 
export default banner;