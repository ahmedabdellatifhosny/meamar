"use client";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";
import "./menu.css";

function Menu() {
  return (
    <Navbar expand="lg" sticky='top'>
    <Container>
      <Navbar.Brand href="/">
        <Image src="/assets/images/logo1.png" width={100} height={100} alt='logo'  priority/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" key="home" className='active'>Home</Nav.Link>
          <Nav.Link href="#link" key="about">About Us</Nav.Link>
          <Nav.Link href="#link" key="projects">Projects </Nav.Link>
          <Nav.Link href="#link" key="media">Media Center </Nav.Link>
          <Nav.Link href="#link" key="hire">Hire Me </Nav.Link>
          <Nav.Link href="#link" key="gallery">Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menu