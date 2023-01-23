import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="navBar" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className="antMargin">EB Movies</Navbar.Brand>
        <img className="img" src="../Tucano.png" alt="" width="30"></img>
        <Nav className="me-auto">
          <Link to="/home" className="HomeName">
            Home
          </Link>
          <NavDropdown
            className="space"
            title="Filtros"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item>
              <Link className="filterColor" to="/action/3.4">
                Ordenar por país
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item id="show-or-hide-alf">
              <Link className="filterColor" to="/action/3.1">
                Ordenar por ordem alfabética
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link className="filterColor" to="/action/3.3">
                Ordenar por ano de lançamento
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item></NavDropdown.Item>
          </NavDropdown>
          <img className="imgMob" src="../Tucano.png" alt="" width="30"></img>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
