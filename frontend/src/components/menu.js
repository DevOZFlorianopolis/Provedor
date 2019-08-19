import React, {Component} from 'react';
import {Nav, NavItem, Form, Button, FormControl, Navbar, Badge} from 'react-bootstrap';
import Provider from '../pages/Provider'
import Client from '../pages/Client'
import Plan from '../pages/Plan'
import ReactDOM from 'react-dom';
import Image from "react-bootstrap/Image";
import logo from '../resources/logoDevoz.png';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import App from "../App";


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
                            <Nav.Link onClick={toProvider}>Provedores</Nav.Link>
                            <Nav.Link onClick={toPlan}>Planos</Nav.Link>
                            <Nav.Link onClick={toClient}>Clientes</Nav.Link>
                        </Router>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2"/>
                        <Button variant="outline-success">Buscar</Button>
                    </Form>


                </Navbar.Collapse>
            </Navbar>

        );
        function toProvider () {
            ReactDOM.render(<Provider />, document.getElementById('root'));
        }

        function toPlan () {
            ReactDOM.render(<Plan />, document.getElementById('root'));
        }

        function toClient () {
            ReactDOM.render(<Client />, document.getElementById('root'));
        }
    }

}

export default Menu;