import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
function EventGallery() {
  return (
    <section className="event-gallery">
      <h2 className="event-gallery__title">Event Gallery</h2>
      <div className="event-gallery__slides">
        <div className="event-gallery__slide slide1"></div>
        <div className="event-gallery__slide slide2"></div>
        <div className="event-gallery__slide slide3"></div>
        <div className="event-gallery__slide slide4"></div>
        <div className="event-gallery__slide slide5"></div>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="event-gallery__arrow--left"
          role="button"
          tabindex="0"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className="event-gallery__arrow--right"
          role="button"
          tabindex="0"
        />
      </div>
    </section>
  );
}

export default EventGallery;
