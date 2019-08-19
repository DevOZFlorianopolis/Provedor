import React, {Component} from 'react';
import {Dropdown, Form} from 'react-bootstrap';
import Button from "react-bootstrap/Button";

class FormPlan extends Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Id</Form.Label>
                    <Form.Control placeholder="Identificação do plano"/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Nome do plano"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control placeholder="Valor do plano"/>
                </Form.Group>
                <Form.Group>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Clientes
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
                <Button variant="primary" onClick={this.getClient}>Adicionar</Button>

            </Form>
        )
    }
}

export default FormPlan;
