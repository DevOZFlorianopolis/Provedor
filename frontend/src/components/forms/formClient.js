import React, {Component} from 'react';
import {Dropdown, Form} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Client from '../../pages/Client'
import DropdownButton from "react-bootstrap/DropdownButton";
import api from "../../services/api";


class FormClient extends Component {
    state = {
        provider: [],
    };

    render() {
        return (
            <Form>
                <Form.Group controlId="id">
                    <Form.Label>Id</Form.Label>
                    <Form.Control inputRef={id => this.inputId = id} placeholder="Identificação do cliente"/>
                </Form.Group>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control inputRef={name => this.inputName = name}  placeholder="Nome do cliente"/>
                </Form.Group>
                <Form.Group>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Planos
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>

                <Button variant="primary" onClick={this.putClient().then()}>Adicionar</Button>
            </Form>
        )
    }

    putClient = async () => {
        api.post('http://localhost:3001/api/client/client/', {
            name: document.getElementById("name") ? document.getElementById("name").value : null ,
            id: document.getElementById("id") ? document.getElementById("name").value : null,
            plans: null,
            signData: null
        });
    }

    getPlan = async () => {
        fetch('http://localhost:3001/api/provider/providers')
            .then((data) => data.json())
            .then((res) => this.setState({data: res.data}));
    };
}

export default FormClient;