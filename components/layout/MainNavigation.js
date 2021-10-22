import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className={classes.cgdc_navbar}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-lg-none">
          CGDC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link>Нүүр хуудас</Nav.Link>
            </Link>
            <Link href="/news" passHref>
              <Nav.Link href="#pricing">Мэдээлэл</Nav.Link>
            </Link>
            <Link href="/news/new-news" passHref>
              <Nav.Link href="#pricing">Мэдээ нэмэх</Nav.Link>
            </Link>
            <NavDropdown title="Үйл явдал" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
