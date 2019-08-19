import React, {Component} from 'react';
import {Form} from 'react-bootstrap';


class FormProvider extends Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Id</Form.Label>
                    <Form.Control placeholder="Identificação do provedor"/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Nome do provedor"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control placeholder="CNPJ do provedor"/>
                </Form.Group>
            </Form>
        )
    }
}

class FormClient extends Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Id</Form.Label>
                    <Form.Control placeholder="Identificação do cliente"/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Nome do cliente"/>
                </Form.Group>
            </Form>
        )
    }
}

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
            </Form>
        )
    }
}

export default FormProvider;