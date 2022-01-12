import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, FormControl, Nav, Navbar, Button, Form } from 'react-bootstrap'
import React, { Component } from 'react'
import logo from './logo192.png'
import F1 from './F1';

export default class About extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className="nav">
                        <Container>
                            <Navbar.Brand href="/">
                                <img src={logo}
                                    width={50}
                                    height={50}
                                    className="d-inline-block align-top"
                                    alt="logo"
                                    className="logos" />

                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-avto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    <Nav.Link href="/forms">Fopms</Nav.Link>
                                    <Nav.Link href="/blog">Blog</Nav.Link>

                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="text"
                                        placeholder="Search"
                                        className="d-inline mx-2"
                                    />
                                    <Button variant="outline-info">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <F1 />
                </div>
            </>
        )
    }
}
