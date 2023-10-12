import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import UserForm from "../utilities/UserForm";

function FormSection() {
  return (
    <section className="form-section">
      <h2 className="form-section__title">- Register Here -</h2>
      <p className="form-section__text">
        Join us to celebrate our biggest night of the year.
      </p>
      <div className="form-section__content">
        <article className="form-section__content--tile">
          <FontAwesomeIcon
            icon={faCalendarCheck}
            className="form-section__content--tile-icon"
            aria-label="calendar date"
          />
          <p className="form-section__content--tile-text">05 NOVEMBER 2022</p>
        </article>
        <article className="form-section__content--tile">
          <FontAwesomeIcon
            icon={faClock}
            className="form-section__content--tile-icon"
            aria-label="time"
          />
          <p className="form-section__content--tile-text">16:00 – 23:00</p>
        </article>
        <article className="form-section__content--tile">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="form-section__content--tile-icon"
            aria-label="location"
          />
          <p className="form-section__content--tile-text">
            Centara Grand & Bangkok Convention Centre, Bangkok
          </p>
        </article>
      </div>
      <UserForm />
    </section>
  );
}

export default FormSection;
