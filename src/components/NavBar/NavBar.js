import React, { useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { navs } from "../../config/config";
import logoImage from "../Images/logoImage.png";
import "../NavBar/NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => setSearchQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <Navbar className="navbar" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <img src={logoImage} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="nav">
          {navs.map((navItem) => (
            <LinkContainer to={navItem.page} key={navItem.page}>
              <Nav.Link>{navItem.nav}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
        <Form className="search-form" onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Search for news..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button onClick={handleSubmit} disabled={searchQuery.trim() === ""}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
