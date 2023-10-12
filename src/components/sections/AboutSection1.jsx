import React from "react";
import { loadIcon } from "../../composables/iconLoader";
import goldNumberDesktop from "../../assets/images/desktop/gold-number.png";
import goldNumberTablet from "../../assets/images/tablet/gold-number.png";
import goldNumberMobile from "../../assets/images/mobile/gold-number.png";
import greenVectorDesktop from "../../assets/images/desktop/green-vector.png";
import greenVectorTablet from "../../assets/images/tablet/green-vector.png";

function AboutSection1() {
  return (
    <section className="about-section1">
      <h2 className="about-section1__title">
        Why <b>Trade</b> with XM?
      </h2>
      <div className="about-section1__separator"></div>
      <p className="about-section1__text">
        We have been providing traders around the world with the same{" "}
        <b>premium experience </b> for over a decade. As an{" "}
        <b>industry-leader</b>, we know what the modern trader needs to be
        successful in the markets.
      </p>
      <div className="about-section1__card--grid">
        <article className="about-section1__card card1">
          <h3 className="about-section1__card--title">
            Superior Trade Execution
          </h3>
          <div className="about-section1__card--separator"></div>
          <p className="about-section1__card--text">
            <b>99%</b> of trades are executed in <b>less than a second,</b> with
            no requotes or rejections.
          </p>
          <img
            src={loadIcon["fastExecution"]}
            alt=""
            className="about-section1__card--icon"
          />
        </article>
        <article className="about-section1__card card2">
          <h3 className="about-section1__card--title">Competitive Pricing</h3>
          <div className="about-section1__card--separator"></div>
          <p className="about-section1__card--text">
            We offer some of the <b>lowest spreads</b> and we don’t charge
            commissions.
          </p>
          <img
            src={loadIcon["competitivePricing"]}
            alt=""
            className="about-section1__card--icon to-left"
          />
        </article>
        <article className="about-section1__card card3">
          <h3 className="about-section1__card--title">Advanced Technology</h3>
          <div className="about-section1__card--separator"></div>
          <p className="about-section1__card--text">
            Trade on <b>MT4</b> or <b>MT5</b>, with expert tools, across
            desktop, web and mobile.
          </p>
          <img
            src={loadIcon["tech"]}
            alt=""
            className="about-section1__card--icon to-left"
          />
        </article>
        <article className="about-section1__card card4">
          <h3 className="about-section1__card--title">Start with $5</h3>
          <div className="about-section1__card--separator"></div>
          <p className="about-section1__card--text">
            Start trading your preferred instruments with as little as a{" "}
            <b>$5 minimum deposit.</b>
          </p>
          <img
            src={loadIcon["dollar"]}
            alt=""
            className="about-section1__card--icon to-left"
          />
        </article>
      </div>
      <div className="about-section1__bg--images">
        <img src={greenVectorDesktop} alt="" className="green-vector-desktop" />
        <img src={greenVectorTablet} alt="" className="green-vector-tablet" />
        <img src={goldNumberDesktop} alt="" className="gold-number-desktop" />
        <img src={goldNumberTablet} alt="" className="gold-number-tablet" />
        <img src={goldNumberMobile} alt="" className="gold-number-mobile" />
      </div>
    </section>
  );
}

export default AboutSection1;
