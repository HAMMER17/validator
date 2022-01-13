import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, FormControl, Nav, Navbar, Button, Form } from 'react-bootstrap'
import React, { Component } from 'react'
import logo from './logo192.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Slide from '../Pages/Slide';
import Blog from '../Pages/Blog';
import Forms from '../Pages/Forms'


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
                                    <Nav.Link href="/slide">Slide</Nav.Link>
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
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/slide" element={<Slide />} />
                            <Route exact path="/forms" element={<Forms />} />
                            <Route exact path="/blog" element={<Blog />} />
                        </Routes>

                    </Router>
                </div>
            </>
        )
    }
}
