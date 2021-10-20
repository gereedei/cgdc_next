import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      className={"bg-prime"}
      variant="dark"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="./" passHref>
              <Nav.Link>Нүүр хуудас</Nav.Link>
            </Link>
            <Link href="./news" passHref>
              <Nav.Link>Мэдээлэл</Nav.Link>
            </Link>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <Link href="./news" passHref>
                <NavDropdown.Item>Action</NavDropdown.Item>
              </Link>
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
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Container>
    //   <header className={classes.header}>
    //     <div className={classes.logo}>CGDC website</div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link href="/">Home page</Link>
    //         </li>
    //         <li>
    //           <Link href="/news">all news</Link>
    //         </li>
    //         <li>
    //           <Link href="/news/new-news">Add New News</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </header>
    // </Container>
  );
}

export default MainNavigation;
