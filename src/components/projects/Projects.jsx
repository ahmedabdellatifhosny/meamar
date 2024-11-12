import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.css";
import { Container } from "react-bootstrap";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="Projects">
      <Container>
        <div className="projects-header text-center text-capitalize mb-5">
          <h2>our projects</h2>
          <small>memaar degla</small>
        </div>
        <div className="slider-container text-center">
          <Slider {...settings}>
            <div className="box">
              <Image
                src="/assets/images/projects/1.jpg"
                width={350}
                height={200}
                alt="project"
                priority
              />
              <div className="details text-start">
                <h4>midest degla</h4>
                <a href="#">view project </a>
              </div>
            </div>
            <div className="box">
              <Image
                src="/assets/images/projects/2.jpg"
                width={350}
                height={200}
                alt="project"
                priority
              />
              <div className="details text-start">
                <h4>sky degla one</h4>
                <a href="#">view project </a>
              </div>
            </div>
            <div className="box">
              <Image
                src="/assets/images/projects/3.jpg"
                width={350}
                height={200}
                alt="project"
                priority
              />
              <div className="details text-start">
                <h4>sky degla two</h4>
                <a href="#">view project </a>
              </div>
            </div>
            <div className="box">
              <Image
                src="/assets/images/projects/4.jpg"
                width={350}
                height={200}
                alt="project"
                priority
              />
              <div className="details text-start">
                <h4>stagex</h4>
                <a href="#">view project </a>
              </div>
            </div>
            <div className="box">
              <Image
                src="/assets/images/projects/5.jpg"
                width={350}
                height={200}
                alt="project"
                priority
              />
              <div className="details text-start">
                <h4>metro degla</h4>
                <a href="#">view project </a>
              </div>
            </div>
            <div className="box">
              <Image
                src="/assets/images/projects/6.jpg"
                width={350}
                height={200}
                alt="project"
                priority
              />
              <div className="details text-start">
                <h4>midest degla</h4>
                <a href="#">view project </a>
              </div>
            </div>
            <div className="box">
              <Image
                src="/assets/images/projects/7.jpg"
                width={350}
                height={200}
                alt="project"
                priority
              />
              <div className="details text-start">
                <h4>stagex</h4>
                <a href="#">view project </a>
              </div>
            </div>
            <div className="box">
              <Image
                src="/assets/images/projects/8.jpg"
                width={350}
                height={200}
                alt="project"
                priority
              />
              <div className="details text-start">
                <h4>midest degla</h4>
                <a href="#">view project </a>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
