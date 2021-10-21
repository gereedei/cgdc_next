import { Container, Row, Col } from "react-bootstrap";

function TopHeader() {
  return (
    <Container>
      <Row className="py-4 g-5">
        <Col md={3}>
          <img src="http://cgdc.org.mn/images/cgdcg-logo.png" />
        </Col>
        <Col
          md={9}
          className="text-end d-flex align-items-center justify-content-end"
        >
          <h2 className="c-prime text-uppercase">
            Компанийн засаглалын хөгжлийн төв
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
export default TopHeader;
