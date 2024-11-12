"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faAddressBook,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./hero.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero">
      <div className="overlay">overlay</div>
      <video src="assets/video/video.mp4" autoPlay muted loop>
        <source src="assets/video/video.mp4" type="video/mp4" />
        <source src="assets/video/video.mp4" type="video/ogg" />
        your browser dies not support our video
      </video>

      <Container>
        <Row>
          <Col md={6}>
            <div className="info-header">
              <div className="details">
                <span><FontAwesomeIcon icon={faPhone} /></span>
                <p>15409</p>
              </div>
              <div className="details">
                <span><FontAwesomeIcon icon={faAddressBook} /></span>
                <p> Degla One Mall, 10th of Ramadan City</p>
              </div>
              <div className="details">
                <span><FontAwesomeIcon icon={faClock} /></span>
                <p>Saturday to Thursday 09:00 - 17:00</p>
              </div>
              <ul className="list-unstyled d-flex gap-4">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faSquareInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="branding text-center">
              <Image
                src="/assets/images/logo1.png"
                width={350}
                height={350}
                alt="logo"
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
