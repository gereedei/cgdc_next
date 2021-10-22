import { Container, Row, Col } from "react-bootstrap";
// import Image from "next/image";
// import logoWhite from "../../assets/images/cgdc-logo-white.png";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { IconContext } from "react-icons";

function TopHeader() {
  return (
    <Container
      fluid
      className="py-4 pb-5 text-white bg-dark "
      style={{
        backgroundColor: "#2C2E3F",
        borderTop: "3px solid #c3203d",
        fontSize: "0.8rem",
      }}
    >
      <Container>
        <Row className="gy-4">
          <Col xs={12} className="text-center">
            {/* <Image src={logoWhite} alt="Picture of the author" /> */}
            <IconContext.Provider value={{ color: "#FFF", size: "1.2rem" }}>
              <a
                href="https://www.facebook.com/CGDCMongolia"
                rel="noreferrer"
                target="_blank"
                className="link-light"
              >
                <BsFacebook className="me-4" />
              </a>
              <a
                href="https://twitter.com/CGDCMongolia"
                rel="noreferrer"
                target="_blank"
                className="link-light"
              >
                <BsTwitter className="me-4 " />
              </a>
              <a
                href="https://www.youtube.com/channel/UCYOtOf4JzBW926Kjg5Mh3OQ"
                rel="noreferrer"
                target="_blank"
                className="link-light"
              >
                <BsYoutube />
              </a>
            </IconContext.Provider>
          </Col>
          <Col md={6} className="text-center">
            <a href="tel:+97670008084" className="link-light">
              7000 8084
            </a>
            ,{" "}
            <a href="tel:+97699105111" className="link-light">
              99105111
            </a>
            ,{" "}
            <a href="tel:+97688978179" className="link-light">
              88978179
            </a>
            <br />
            <strong>Факс:</strong> 7000 8084, <strong>E-mail:</strong>{" "}
            <a href="mailto:info@cgdc.org.mn" className="link-light">
              info@cgdc.org.mn
            </a>
          </Col>
          <Col md={6} className="text-center">
            СЭЗИС-ийн хичээлийн C корпус, C-1105 тоот өрөө,
            <br /> Энхтайвны өргөн чөлөө 5, 113381 Улаанбаатар
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default TopHeader;
