import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../assets/images/cgdc-logo.png";

function TopHeader() {
  return (
    <Container>
      <Row className="py-4 g-4">
        <Col md={3}>
          <Image src={Logo} alt="Cgdc logo" />
        </Col>
        <Col
          md={9}
          className="text-end d-flex align-items-center justify-content-end"
        >
          <h5 className="c-prime text-uppercase">
            Компанийн засаглалын хөгжлийн төв
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
export default TopHeader;
