import React, {Component} from 'react';
import {Nav, NavItem, Form, Button, FormControl, Navbar, Badge} from 'react-bootstrap';
import Provider from '../pages/Provider'
import Client from '../pages/Client'
import Plan from '../pages/Plan'
import Image from "react-bootstrap/Image";
import logo from '../resources/logoDevoz.png';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class Menu extends Component {
    state = {
        context: ''
    };

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Image src={logo} style={{width: 35, marginRight: 10}}/>
                <Navbar.Brand href="#home">DevOZ Net</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Router>
                            <Nav.Link to="/providers">Provedores</Nav.Link>
                            <Nav.Link to="/plans">Planos</Nav.Link>
                            <Nav.Link to="/clients">Clientes</Nav.Link>
                        </Router>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2"/>
                        <Button variant="outline-success">Buscar</Button>
                    </Form>


                </Navbar.Collapse>
            </Navbar>
        );


    }
}

export default Menu;