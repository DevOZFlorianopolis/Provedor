import React, {Component} from 'react';
import {Nav, NavItem, Form, Button, FormControl, Navbar, Badge} from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import logo  from '../resources/logoDevoz.png';

 class Menu extends Component{
     render() {
         return(
             <Navbar bg="light" expand="lg">
                 <Image src={logo} style={{width:35, marginRight: 10}}/>
                 <Navbar.Brand href="#home">DevOZ Net</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto">
                         <Nav.Link href="/providers">Provedores</Nav.Link>
                         <Nav.Link href="/plans">Planos</Nav.Link>
                         <Nav.Link href="/clients">Clien    tes</Nav.Link>
                     </Nav>
                     <Form inline>
                         <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                         <Button variant="outline-success">Buscar</Button>
                     </Form>
                 </Navbar.Collapse>
             </Navbar>
         );
     }
 }

 export default Menu;