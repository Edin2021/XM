import React from "react";
import { loadIcon } from "../../composables/iconLoader";

function AboutSection2() {
  return (
    <section className="about-section2">
      <div className="about-section2__title--wrapper">
        <div className="about-section2__separator"></div>
        <h2 className="about-section2__title">
          Big<span>.</span> Fair<span>.</span> Human<span>.</span>
        </h2>
        <p className="about-section2__text">
          Learn why <b>over 5 million clients choose XM</b> as their trusted
          online broker.
        </p>
      </div>
      <div className="about-section2__tile--grid">
        <div className="about-section2__bg--cross">
          <div className="about-section2__bg--cross-hl1"></div>
          <div className="about-section2__bg--cross-hl2"></div>
          <div className="about-section2__bg--cross-vl1"></div>
          <div className="about-section2__bg--cross-vl2"></div>
          <div className="about-section2__bg--cross-dot"></div>
        </div>
        <article className="about-section2__tile">
          <img
            src={loadIcon["frame1"]}
            alt=""
            className="about-section2__tile--icon"
          />
          <h3 className="about-section2__tile--title">
            Authorised and Regulated
          </h3>
          <p className="about-section2__tile--text">
            At XM, we adhere to all regulatory standards and are fully
            authorised and regulated by FSC.
          </p>
        </article>
        <article className="about-section2__tile">
          <img
            src={loadIcon["frame2"]}
            alt=""
            className="about-section2__tile--icon"
          />
          <h3 className="about-section2__tile--title">Committed and Fair</h3>
          <p className="about-section2__tile--text">
            We operate with complete transparency and adhere to the highest
            professional and ethical standards.
          </p>
        </article>
        <article className="about-section2__tile">
          <img
            src={loadIcon["frame3"]}
            alt=""
            className="about-section2__tile--icon"
          />
          <h3 className="about-section2__tile--title">Multi-Award-Winning</h3>
          <p className="about-section2__tile--text">
            Over the years we have received over 40 awards for the quality of
            our products and services.
          </p>
        </article>
        <article className="about-section2__tile">
          <img
            src={loadIcon["frame4"]}
            alt=""
            className="about-section2__tile--icon"
          />
          <h3 className="about-section2__tile--title">24/7 Support</h3>
          <p className="about-section2__tile--text">
            Our support agents are on hand 24/7 to answer your questions or
            assist you with any issues.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutSection2;
