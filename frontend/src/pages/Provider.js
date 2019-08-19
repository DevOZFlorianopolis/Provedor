// /client/App.js
import React, {Component} from 'react';
import api from '../services/api'
import Menu from '../components/menu'
import FormData from '../components/form'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as r from 'react-bootstrap';


class Provider {

    state = {
        data: [],
        component: null,
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
    };

    componentDidMount() {
        this.getData();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getProviders, 1000);
            this.setState({intervalIsSet: interval});
        }
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({intervalIsSet: null});
        }
    }

    getProvider = async (props) => {
        fetch('http://localhost:3001/api/provider/providers')
            .then((data) => data.json())
            .then((res) => this.setState({data: res.data}));
    };

    putProvider = (message) => {
        let currentIds = this.state.data.map((data) => data.id);

        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        api.post('http://localhost:3001/api/provider/provider/?id', {
            id: idToBeAdded,
            message: message,
        });
    };

    deleteProvider = (idTodelete) => {
        parseInt(idTodelete);
        let objIdToDelete = null;
        this.state.data.forEach((dat) => {
            if (dat.id == idTodelete) {
                objIdToDelete = dat._id;
            }
        });

        api.delete('http://localhost:3001/api/provider/provider?id', {
            data: {
                id: objIdToDelete,
            },
        });
    };

    updateDB = (idToUpdate, updateToApply) => {
        let objIdToUpdate = null;
        parseInt(idToUpdate);
        this.state.data.forEach((dat) => {
            if (dat.id == idToUpdate) {
                objIdToUpdate = dat._id;
            }
        });

        api.post('http://localhost:3001/api/updateData', {
            id: objIdToUpdate,
            update: {message: updateToApply},
        });
    };

    render() {
        const {data} = this.state;
        return (
            <div>
                <div>
                    <Menu/>
                </div>
                <r.Row>
                    <r.Col xs lg="9">
                        <div className={'data-list'}>
                            {data.map((dat) => (
                                <article key={data.id}>
                                    <span style={{color: 'gray'}}> </span>
                                    <strong> {dat.name} </strong>
                                    {console.log(this.props)}
                                    <a onClick> Editar </a>
                                </article>
                            ))}
                        </div>
                    </r.Col>
                    <r.Col xs lg="2">
                        < div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                            <FormData/>
                        </div>
                    </r.Col>
                </r.Row>

            </div>
        )
    }
}

export default Provider;