
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie , faHouseChimneyWindow , faPen } from '@fortawesome/free-solid-svg-icons';

import "./statistcs.css";


function Statistcs() {
  return (
    <div className="statistcs ">
      <Container>
        <Row>
          <Col md={4}>
            <div className="clents text-start">
              <div className="icon">
              <FontAwesomeIcon icon={faUserTie} />
              </div>
              <div className="info">
              <p>+1000</p>
                <p>our clients</p>
               
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="units">
              <div className="icon">
              <FontAwesomeIcon icon={faHouseChimneyWindow} />
              </div>
              <div className="info">
              <p>+1000</p>
                <p>number of units</p>
              
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="opinion">
              <div className="icon">
              <FontAwesomeIcon icon={faPen} />
              </div>
              <div className="info">
              <p>+1000</p>
                <p>the opinions</p>
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Statistcs;
