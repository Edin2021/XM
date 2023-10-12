import React from "react";
import generalSwapDesktop from "../../assets/images/desktop/general-0-swaps.png";
import generalSwapTablet from "../../assets/images/tablet/general-0-swaps.png";
import generalSwapMobile from "../../assets/images/mobile/general-0-swaps.png";

import intersect1Desktop from "../../assets/images/desktop/intersect-1.png";
import intersect1Tablet from "../../assets/images/tablet/intersect-1.png";
import intersect1Mobile from "../../assets/images/mobile/intersect-1.png";

import intersect2Desktop from "../../assets/images/desktop/intersect-2.png";
import intersect2Tablet from "../../assets/images/tablet/intersect-2.png";
import intersect2Mobile from "../../assets/images/mobile/intersect-2.png";

function Banner() {
  return (
    <div className="banner__wrapper">
      <section className="banner">
        <div className="banner__wrapper--inner">
          <div className="banner__subtext">TRADE WITH</div>
          <h1 className="banner__title">
            <b>Zero Swaps</b> on All XM Ultra Low Accounts for more than 25
            instruments!
          </h1>
          <p className="banner__text">
            Enjoy spreads as <b>low as 0.6 pips</b> and{" "}
            <b>leverage up to 1000:1</b> on instruments like{" "}
            <b>EURUSD, USDJPY, EURJPY, GBPUSD,</b> and <b>Gold.</b>
          </p>
          <button className="banner__account--button">OPEN ACCOUNT</button>
          <p className="banner__demo">
            New to trading? Try a{" "}
            <a href="#demo" className="banner__demo--link">
              Demo account.
            </a>
          </p>
          <p className="banner__terms--conditions">
            Terms and Conditions apply <span>*</span>. To read the full T&Cs,
            click{" "}
            <a
              href="#terms-and-conditions"
              className="banner__terms--conditions--link"
            >
              here.
            </a>
          </p>
        </div>
        <div className="banner__general--swap">
          <img
            src={generalSwapMobile}
            alt=""
            className="banner__general--swap-mobile"
          />
          <img
            src={generalSwapTablet}
            alt=""
            className="banner__general--swap-tablet"
          />
          <img
            src={generalSwapDesktop}
            alt=""
            className="banner__general--swap-desktop"
          />
        </div>
        <div className="banner__intersect">
          <img
            src={intersect1Mobile}
            alt=""
            className="banner__intersect--mobile1"
          />
          <img
            src={intersect1Tablet}
            alt=""
            className="banner__intersect--tablet1"
          />
          <img
            src={intersect1Desktop}
            alt=""
            className="banner__intersect--desktop1"
          />
          <img
            src={intersect2Mobile}
            alt=""
            className="banner__intersect--mobile2"
          />
          <img
            src={intersect2Tablet}
            alt=""
            className="banner__intersect--tablet2"
          />
          <img
            src={intersect2Desktop}
            alt=""
            className="banner__intersect--desktop2"
          />
        </div>
      </section>
    </div>
  );
}

export default Banner;
