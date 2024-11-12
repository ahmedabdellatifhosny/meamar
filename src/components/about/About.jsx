import { Col, Container, Row , Button } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import css style
import "./about.css";

function About() {
  // يجب أن يكون useState هنا داخل المكون
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="about">
      <Container>
        <Row>
  
          <Col md={6}>
            <div className="about-info">
                <div className="title">
                <h2>about memaar degla</h2>
                <small>stylish living</small>
                </div>
              
              
              <p>
                An investment vision in selecting projects to ensure the best
                investment opportunities
              </p>
              <p>
                Memmar Degla Real Estate Development Company was established in
                2019 and is one of the leading companies in the field of real
                estate investment in the Tenth of Ramadan City. The company
                offers advanced architectural thought with a Europeanive and
                industrial projects in the tenth of Ramadan .
              </p>
              <a href="#">
                <Button variant="outline-warning">more</Button>
              </a>
            </div>
          </Col>

          <Col md={6}>
            <div className="swp">
              <div className="big-slider">
                <Swiper
                  style={{
                    height: "300px", // يمكنك ضبط هذا الارتفاع كما تريد
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <Image
                      src="/assets/images/about-slider/slider1.jpg"
                      width={500}
                      height={500}
                      alt="abbout slider"
                      priority
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/assets/images/about-slider/slider2.jpg"
                      width={500}
                      height={500}
                      alt="abbout slider"
                      priority
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/assets/images/about-slider/slider3.jpg"
                      width={500}
                      height={500}
                      alt="abbout slider"
                      priority
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/assets/images/about-slider/slider4.jpg"
                      width={500}
                      height={500}
                      alt="abbout slider"
                      priority
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="small-pic">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Image
                      src="/assets/images/about-slider/slider1.jpg"
                      width={100}
                      height={100}
                      alt="abbout slider"
                      priority
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/assets/images/about-slider/slider2.jpg"
                      width={100}
                      height={100}
                      alt="abbout slider"
                      priority
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/assets/images/about-slider/slider3.jpg"
                      width={100}
                      height={100}
                      alt="abbout slider"
                      priority
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/assets/images/about-slider/slider4.jpg"
                      width={100}
                      height={100}
                      alt="abbout slider"
                      priority
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
